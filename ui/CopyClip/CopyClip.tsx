"use client";

import { Tooltip, Text, useClipboard } from "@chakra-ui/react";
import React from "react";

function CopyClip({ email }: { email: string }) {
  const { hasCopied, onCopy } = useClipboard(email);

  return (
    <Tooltip
      label={hasCopied ? "Email Copied!" : "Copy Email"}
      closeOnClick={false}
      hasArrow
    >
      <Text
        as="i"
        fontSize={"lg"}
        onClick={onCopy}
        color="tertiary.400"
        fontWeight={600}
        _hover={{
          cursor: "pointer",
        }}
      >
        {email}
      </Text>
    </Tooltip>
  );
}

export default CopyClip;
