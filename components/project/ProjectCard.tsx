import {
  Box,
  Button,
  Flex,
  Text,
  Image,
  Tag,
  TagLabel,
} from "@chakra-ui/react";
import React from "react";

type Props = {
  image?: any;
  name: string;
  category: string;
  avatars?: string[];
  description: string;
  status: string;
};

export const ProjectCard = ({
  image,
  name,
  category,
  avatars,
  description,
  status,
}: Props) => {
  return (
    <Flex direction="column">
      <Box>
        <Image
          w={"180px"}
          h={"130px"}
          src={image}
          alt="img"
          objectFit="cover"
          borderRadius="15px"
        />
      </Box>
      <Flex direction="column">
        <Text fontSize="md" color="gray.500" fontWeight="600" mb="10px">
          {category}
        </Text>
        <Text fontSize="xl" color={"gray.700"} fontWeight="bold" mb="10px">
          {name}
        </Text>
        <Tag w={"fit-content"} size={"md"} variant="subtle" colorScheme="cyan">
          <TagLabel>{status}</TagLabel>
        </Tag>
        <Text fontSize="md" color="gray.500" fontWeight="400" mb="20px">
          {description}
        </Text>
        <Flex justifyContent="space-between">
          <Button
            variant="outline"
            colorScheme="teal"
            minW="110px"
            h="36px"
            fontSize="xs"
            px="1.5rem"
          >
            VIEW PROJECT
          </Button>
          {/* <AvatarGroup size="xs">
            {avatars.map((el, idx) => {
              return <Avatar src={el} key={idx} />;
            })}
          </AvatarGroup> */}
        </Flex>
      </Flex>
    </Flex>
  );
};
