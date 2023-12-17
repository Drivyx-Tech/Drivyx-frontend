import axios, { CreateAxiosDefaults, AxiosInstance, AxiosError } from "axios";
import { TEndpoint } from "./endpoints/type";
import { useToast } from "@chakra-ui/toast";

const base = process.env.NEXT_PUBLIC_LOCAL || process.env.NEXT_PUBLIC_AWS_DEV;

type Method = "GET" | "POST" | "PUT" | "DELETE";

class Fetcher<T extends TEndpoint<any, any>> {
  private instance: AxiosInstance;

  private endpoint: string | undefined;

  private payload: T["requestType"] | undefined;

  private useCurrentToken: boolean | undefined;

  // Maintain a queue to handle requests sequentially
  private requestQueue: (() => Promise<any>)[] = [];

  private isRefreshing = false;

  private constructor(method: Method) {
    let axiosConf: CreateAxiosDefaults = {
      baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
      method: method,
    };

    if (method != "GET") {
      axiosConf = {
        ...axiosConf,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      };
    }

    this.instance = axios.create(axiosConf);

    this.instance.interceptors.response.use(
      (response) => response,
      (error) => this.handleErrorResponse(error)
    );

    return this;
  }

  private handleErrorResponse(error: AxiosError): Promise<any> {
    if (error.code === "ERR_NETWORK") {
      console.log("error code", error.code);
      window.location.replace("/signin");
    }

    console.log("----handle error response----", error);
    console.log("----error code----", error.response?.status);
    // Handle 401 error - unauthenticated
    if (error.response?.status === 401 || error.response?.status === 502) {
      // return this.refreshAccessTokenAndRetry(error);
      return this.enqueueRequest(() => this.refreshAccessTokenAndRetry(error));
    } else {
      return Promise.reject(error);
    }
  }

  private async enqueueRequest(requestFn: () => Promise<any>): Promise<any> {
    return new Promise((resolve, reject) => {
      this.requestQueue.push(async () => {
        try {
          const result = await requestFn();
          resolve(result);
        } catch (error) {
          reject(error);
        } finally {
          // After handling the request, remove it from the queue
          this.requestQueue.shift();
          // Process the next request in the queue
          if (this.requestQueue.length > 0) {
            const nextRequest = this.requestQueue[0];
            nextRequest();
          }
        }
      });

      // If the queue was empty, start processing the request
      if (this.requestQueue.length === 1) {
        const nextRequest = this.requestQueue[0];
        nextRequest();
      }
    });
  }

  private async refreshAccessTokenAndRetry(error: AxiosError): Promise<any> {
    // If a refresh is already in progress, enqueue the request
    if (this.isRefreshing) {
      return this.enqueueRequest(() => this.refreshAccessTokenAndRetry(error));
    }

    this.isRefreshing = true;

    try {
      const newAccessToken = await this.refreshAccessToken();
      console.log("----get a refresh token---", newAccessToken);
      console.log("refresh access token and retry", error);

      if (!error.config) return;

      if (newAccessToken) {
        // Retry the failed request with the new access token
        error.config.headers.Authorization = `Bearer ${newAccessToken}`;

        console.log("check error -----------------", error);

        // only retry twice, otherwise throw error
        if (error.config.headers["retryCount"] === 2) {
          // if failed twice, then direct to signin page
          window.location.replace("/signin");
          return Promise.reject(error);
        }

        return this.instance(error.config);
      } else {
        window.location.replace("/signin");
        return Promise.reject(error);
      }
    } finally {
      this.isRefreshing = false;
    }
  }

  private async refreshAccessToken(): Promise<string | undefined> {
    const refreshToken = localStorage.getItem("refreshToken");
    if (refreshToken) {
      const response = await axios.post(base + "/refresh-token", {
        refreshToken,
      });
      const newAccessToken = response.data.AccessToken;

      localStorage.setItem("accessToken", newAccessToken);

      return newAccessToken;
    }

    return undefined;
  }

  static init<T extends TEndpoint<any, any> = TEndpoint<void, void>>(
    method: Method,
    endpoint: string
  ) {
    const fetcher = new Fetcher<T>(method);
    fetcher.endpoint = endpoint;
    fetcher.useCurrentToken = false;

    return fetcher;
  }

  withJsonPaylad(payload: T["requestType"]) {
    this.payload = payload;
    return this;
  }

  withParams(params: T["requestType"]) {
    this.instance.defaults.params = params;
    return this;
  }

  withToken(token: string) {
    this.instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    return this;
  }

  withCurrentToken() {
    this.useCurrentToken = true;

    return this;
  }

  fetchPromise(): Promise<T["requestType"]> {
    return this.instance.request({
      data: this.payload,
      url: this.endpoint,
    });
  }

  async fetchData(): Promise<T["responseType"]> {
    if (this.useCurrentToken) {
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        window.location.replace("/signup");
      }

      const token = `Bearer ${localStorage.getItem("accessToken")}`;

      this.instance.defaults.headers.common.Authorization = token;
    }

    try {
      const resp: { data: T["responseType"] } = await this.instance.request({
        data: this.payload,
        url: this.endpoint,
      });

      return resp.data;
    } catch (e: any) {
      console.log(e.response.status);
    }
  }

  // =============================================================
  // Helpers
  // =============================================================
  private logFetchError(e: any) {
    const errorMeta = {
      name: "Unknown",
      message: "Unknown error",
      code: "Unknown",
      config: "Unknown",
    };

    if (e instanceof AxiosError) {
      errorMeta.name = e.name;
      errorMeta.code = e.code as string; // ew, type casting
      errorMeta.message = e.message;
      errorMeta.config = JSON.stringify(
        {
          baseURL: e.config?.baseURL,
          endpoint: e.config?.url,
          headers: e.config?.headers,
          body:
            typeof e.config?.data === "undefined"
              ? {}
              : (JSON.parse(e.config?.data as string) as object), // type cast again
        },
        undefined,
        4
      ).slice(2, -1);
    }

    console.log();
    // Adding newline fucks up the formatting from expo
    console.log("============================================================");
    console.log("An error has occurred!");
    console.log(`\tName:    ${errorMeta.name}`); // I dont think js provides us anything w/ alligning stuff
    console.log(`\tCode:    ${errorMeta.code}`);
    console.log(`\tMessage: ${errorMeta.message}`);
    console.log();
    console.log("************************************************************");
    console.log("*                       CONFIG                             *");
    console.log("************************************************************");
    errorMeta.config
      .split("\n")
      .forEach((l) => console.log(l.replace(/ {4}/, "")));
    console.log("============================================================");
  }
}

export default Fetcher;
