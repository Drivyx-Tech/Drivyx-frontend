import { CustomPortableImage } from "./CustomPortableText/CustomPortableImage";
import { CustomPortableBlock } from "./CustomPortableText/CustomPortableBlock";
import { Text, Image } from "@chakra-ui/react";
import { urlForImage } from "@/sanity/image";
import { getImageDimensions } from "@sanity/asset-utils";

export const CustomPortableComponents = {
  types: {
    image: ({ value, isInline }: any) => {
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
    },
  },
  block: {
    // Ex. 1: customizing common block types
    h2: ({ children }: any) => <Text textStyle={"heading"}>{children}</Text>,
    h3: ({ children }: any) => <Text textStyle={"heading"}>{children}</Text>,
    h4: ({ children }: any) => <Text textStyle={"heading"}>{children}</Text>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-purple-500">{children}</blockquote>
    ),

    // Ex. 2: rendering custom styles
    customHeading: ({ children }: any) => (
      <h2 className="text-lg text-primary text-purple-700">{children}</h2>
    ),
  },
};
