import createImageUrlBuilder from "@sanity/image-url";
import { apiVersion, dataset, projectId, useCdn } from "./config/client-config";

const imageBuilder = createImageUrlBuilder({
  projectId,
  dataset,
});

export const urlForImage = (source: any) => {
  const width = 300;
  const height = 200;

  const url = imageBuilder.image(source).auto("format").width(700).url();

  return {
    src: url,
    width: width,
    height: height,
  };
};
