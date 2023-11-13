import { Text, Image, VStack, Flex } from "@chakra-ui/react";
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
    h2: ({ children }: any) => (
      <VStack justify="center" align="center" my={10}>
        <Text textStyle={"sanityH2"}>{children}</Text>{" "}
      </VStack>
    ),
    h3: ({ children }: any) => (
      <VStack justify="center" align="center" my={10}>
        {" "}
        <Text textStyle={"sanityH3"}>{children}</Text>{" "}
      </VStack>
    ),
    h4: ({ children }: any) => <Text textStyle={"sanityH4"}>{children}</Text>,
    normal: ({ children }: any) => (
      <Flex gap={10}>
        {" "}
        <Text textStyle={"sanityNormal"}>{children}</Text>
      </Flex>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-purple-500">{children}</blockquote>
    ),

    // Ex. 2: rendering custom styles
    customHeading: ({ children }: any) => (
      <h2 className="text-lg text-primary text-purple-700">{children}</h2>
    ),
  },
};
