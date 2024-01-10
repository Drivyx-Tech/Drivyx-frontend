import { Text, Image, VStack } from "@chakra-ui/react";
import blackLogo from "../../public/logo-black-72.png";
import LinkButton from "../Button/LinkButton";

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
      textAlign="center"
      justify="center"
      h={{ base: "fit-content", md: "350px" }}
      w={{ base: "100%", md: "380px" }}
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

        <LinkButton text={"learn more"} navTo={"/how-to"} />
      </VStack>
    </VStack>
  );
};

export default FeatureCard;
