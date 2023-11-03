import { Text } from "@chakra-ui/react";

// `components` object you'll pass to PortableText
export const CustomPortableBlock = {
  block: {
    // Ex. 1: customizing common block types
    h2: ({ children }: any) => <Text fontSize={"45px"}>{children}</Text>,
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
