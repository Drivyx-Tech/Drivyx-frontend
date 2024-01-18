import { Text, Image, VStack } from "@chakra-ui/react";
import blackLogo from "../../public/logo-black-72.png";
import LinkButton from "../Button/LinkButton";
import AnimatedTextButton from "../Button/AnimatedTextButton";

const FeatureCard = ({
  heading,
  content,
}: {
  heading: string;
  content: string;
}) => {
  return (
    <VStack
      px={4}
      rounded="lg"
      // bg={"secondary.300"}
      textAlign="center"
      justify="flex-start"
      h={"full"}
      minH={{ base: "fit-content", md: "380px" }}
      w={{ base: "100%", md: "430px" }}
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

        <AnimatedTextButton
          navTo={"/how-to"}
          text={"learn more"}
          arrowDir={"right"}
        />
      </VStack>
    </VStack>
  );
};

export default FeatureCard;
