import { ROUTE_PATH } from "@/constants/ROUTE_PATH";
import { Button, Link } from "@chakra-ui/react";
import React from "react";

function NormalMenu() {
  return (
    <>
      <Link href={ROUTE_PATH.AUTH.SIGNUP}>
        <Button
          display={{ base: "none", lg: "inline-flex" }}
          fontSize={"sm"}
          fontWeight={700}
          variant="outline"
          textColor="primary.700"
          borderColor="transparent"
          _hover={{ bg: "primary.default", color: "text.darkest" }}
          transition={"all .25s ease-in-out"}
        >
          SIGN UP / LOG IN
        </Button>
      </Link>
      <Link href={ROUTE_PATH.NON_AUTH.MARKETPLACE.HOME}>
        <Button
          display={{ base: "none", lg: "inline-flex" }}
          fontSize={"sm"}
          fontWeight={600}
          variant={"solid"}
          color={"white"}
          bg={"secondary.500"}
          _hover={{
            bg: "secondary.default",
          }}
          transition={"all .25s ease-in-out"}
        >
          Marketplace
        </Button>
      </Link>
    </>
  );
}

export default NormalMenu;
