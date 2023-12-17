"use client";

import { Text, Image, VStack, Button } from "@chakra-ui/react";
import blackLogo from "../../public/logo-black-72.png";
import { useRouter } from "next/navigation";

const FeatureCard = ({
  heading,
  content,
}: {
  heading: string;
  content: string;
}) => {
  const router = useRouter();

  return (
    <VStack
      px={4}
      rounded="lg"
      textAlign="center"
      pos="relative"
      h={{ base: "fit-content", md: "380px" }}
      w={{ base: "100%", md: "300px" }}
    >
      <VStack gap={4} h={"full"} justify={"space-between"}>
        <VStack gap={4}>
          <Image src={blackLogo.src} alt="drixyv logo" />
          <Text textStyle={"subheading"} fontWeight="semibold">
            {heading}
          </Text>
          <Text textStyle={"context"} fontSize="md">
            {content}
          </Text>
        </VStack>

        <Button
          textStyle={"context"}
          variant={"link"}
          color={"secondary.400"}
          size={"md"}
          onClick={() => router.push("/how-to")}
        >
          Learn more
        </Button>
      </VStack>
    </VStack>
  );
};

export default FeatureCard;
