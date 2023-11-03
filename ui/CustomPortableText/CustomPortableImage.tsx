import { getImageDimensions } from "@sanity/asset-utils";
import { Image } from "@chakra-ui/react";
import { urlForImage } from "@/sanity/image";

// Barebones lazy-loaded image component
export const CustomPortableImage = ({ value, isInline }: any) => {
  const { width, height } = getImageDimensions(value);
  return (
    <Image
      src={urlForImage(value).src}
      alt={value.alt || " "}
      loading="lazy"
      style={{
        // Display alongside text if image appears inside a block text span
        display: isInline ? "inline-block" : "block",

        // Avoid jumping around with aspect-ratio CSS property
        aspectRatio: width / height,
      }}
    />
  );
};
