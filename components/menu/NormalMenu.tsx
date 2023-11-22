import { Button, Link } from "@chakra-ui/react";
import React from "react";

function NormalMenu() {
  return (
    <>
      <Link href={"/signup"}>
        <Button
          fontSize={"sm"}
          fontWeight={700}
          variant="outline"
          textColor="primary.700"
          borderColor="transparent"
          _hover={{ bg: "primary.default", color: "text.darkest" }}
          transition={"all .25s ease-in-out"}
        >
          SIGN UP
        </Button>
      </Link>
      <Link href={"/marketplace"}>
        <Button
          display={{ base: "none", md: "inline-flex" }}
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
          Get Started
        </Button>
      </Link>
    </>
  );
}

export default NormalMenu;
