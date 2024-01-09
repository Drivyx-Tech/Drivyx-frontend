import { Text } from "@chakra-ui/react";

export const CustomPortableText = {
  block: {
    h1: ({ children }: any) => {
      return (
        <Text fontSize={"28px"} color={"secondary.800"} fontWeight={"bold"}>
          {children}
        </Text>
      );
    },
    h2: ({ children }: any) => {
      return (
        <Text fontSize={"26px"} color={"secondary.800"} fontWeight={"bold"}>
          {children}
        </Text>
      );
    },
    h3: ({ children }: any) => {
      return (
        <Text fontSize={"24px"} color={"secondary.800"} fontWeight={"bold"}>
          {children}
        </Text>
      );
    },
    h4: ({ children }: any) => {
      return (
        <Text fontSize={"22px"} color={"secondary.800"} fontWeight={"bold"}>
          {children}
        </Text>
      );
    },
  },
};
