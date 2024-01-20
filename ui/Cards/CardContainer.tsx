import { Flex } from "@chakra-ui/react";

function CardContainer({ children }: { children: React.ReactNode }) {
  return (
    <Flex
      w={"full"}
      h={"full"}
      gap={4}
      bgColor={"white"}
      p={8}
      rounded={30}
      shadow="0px 2px 5.5px rgba(0, 0, 0, 0.02)"
      align={"flex-start"}
    >
      {children}
    </Flex>
  );
}

export default CardContainer;
