import { ROUTE_PATH } from "@/constants/ROUTE_PATH";
import CustomGradientButton from "@/ui/Button/CustomGradientButton";
import CustomSolidButton from "@/ui/Button/CustomSolidButton";
import { Text, Link, HStack, Stack } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";

function NormalMenu() {
  const router = useRouter();

  return (
    <HStack
      display={{ base: "none", lg: "inline-flex" }}
      justify={"center"}
      spacing={4}
    >
      <Text
        cursor={"pointer"}
        onClick={() => router.push(ROUTE_PATH.AUTH.SIGNIN)}
        bgGradient="linear(to-l, #fdbb2d, #22c1c3)"
        bgClip="text"
        fontSize={"sm"}
        fontWeight={600}
      >
        SIGN UP / LOG IN
      </Text>
      <CustomSolidButton
        colorTheme="primary"
        text={"Marketplace"}
        navTo={ROUTE_PATH.NON_AUTH.MARKETPLACE.HOME}
      />
    </HStack>
  );
}

export default NormalMenu;
