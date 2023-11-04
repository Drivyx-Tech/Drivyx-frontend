import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import {
  apiVersion,
  dataset,
  projectId,
  useCdn,
} from "./sanity/config/client-config";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId,
  dataset,
  apiVersion,
  useCdn,
  title: "Drixyv CMS",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
