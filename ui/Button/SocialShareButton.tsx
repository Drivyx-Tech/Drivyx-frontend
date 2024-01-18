"use client";

import { LinkIcon } from "@chakra-ui/icons";
import { HStack, Stack, Tooltip, useClipboard } from "@chakra-ui/react";
import React from "react";
import {
  LinkedinShare,
  TwitterShare,
  EmailShare,
  FacebookShare,
  WhatsappShare,
} from "react-share-kit";

type Props = {
  url: string;
  titleToShare: string;
  summary: string;
  source?: string;
};

function SocialMediaShareButton({ url, titleToShare, summary, source }: Props) {
  const { hasCopied, onCopy } = useClipboard(url);

  return (
    <HStack>
      <LinkedinShare
        size={32}
        round={true}
        url={url}
        title={titleToShare}
        source={source}
        summary={summary}
      />

      <TwitterShare size={32} round={true} url={url} title={titleToShare} />
      <FacebookShare size={32} round={true} quote={titleToShare} url={url} />
      <WhatsappShare
        size={32}
        round={true}
        url={url}
        title={titleToShare}
        separator=":: "
      />

      <Tooltip
        label={hasCopied ? "Link Copied!" : "Copy Link"}
        closeOnClick={false}
        hasArrow
      >
        <Stack
          w={"31px"}
          h={"31px"}
          bg={"gray.600"}
          justify={"center"}
          align={"center"}
          rounded={"full"}
          cursor={"pointer"}
          onClick={onCopy}
        >
          <LinkIcon color={"white"} />
        </Stack>
      </Tooltip>
    </HStack>
  );
}

export default SocialMediaShareButton;
