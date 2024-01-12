import { Box, IconButton, Stack } from "@chakra-ui/react";
import React from "react";
import { BsLinkedin, BsTwitter } from "react-icons/bs";

function MediaButton() {
  return (
    <Stack align="center" justify="center" direction={"row"} spacing={24}>
      <Box as="a" href="https://twitter.com/DrivyxESG">
        <IconButton
          aria-label="twitter"
          variant="ghost"
          size="lg"
          icon={<BsTwitter size="28px" />}
          color="white"
          bgColor={"primary.800"}
          _hover={{
            bg: "primary.700",
            color: "white",
          }}
          isRound
          transition={"all .3s ease"}
        />
      </Box>
      <Box as="a" href="https://www.linkedin.com/company/drivyx">
        <IconButton
          aria-label="linkedin"
          variant="ghost"
          size="lg"
          icon={<BsLinkedin size="28px" />}
          color="white"
          bgColor={"primary.800"}
          _hover={{
            bg: "primary.700",
            color: "white",
          }}
          isRound
          transition={"all .3s ease"}
        />
      </Box>
    </Stack>
  );
}

export default MediaButton;
