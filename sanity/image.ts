import createImageUrlBuilder from "@sanity/image-url";
import { projectId, dataset } from "./config/client-config";

const imageBuilder = createImageUrlBuilder({
  projectId,
  dataset,
});

export const urlForImage = (source: any) => {
  const dimensions = source?.asset?._ref.split("-")[2];

  const [width, height] = dimensions
    .split("x")
    .map((num: any) => parseInt(num, 10));

  const url = imageBuilder
    .image(source)
    .auto("format")
    .width(Math.min(width, 300))
    .height(Math.min(height, 200))
    .url();

  return {
    src: url,
    width: width,
    height: height,
  };
};
