"use client";

import SectionContainer from "@/ui/SectionContainer";
import { Box, Skeleton, Stack, Image, Text } from "@chakra-ui/react";
import biodiversity from "public/images/biodiversity-project.jpeg";

const ShortIntroWithImg = () => {
  return (
    <SectionContainer my={{ base: 10, lg: 16 }}>
      <Stack
        direction={{ base: "column", md: "row" }}
        justifyContent="center"
        gap={[4, 6, 8, 14]}
      >
        <Stack flex={1} direction="column" spacing={8} justifyContent="center">
          <Text textStyle={"heading"}>
            Discover Sustainable Projects Making a Positive Impact on Our Future
          </Text>
          <Box>
            <Text textStyle={"smContext"}>
              Explore our curated selection of featured projects that are
              driving sustainability forward. Each project showcases its goals,
              funding status, and estimated completion date, giving you a
              comprehensive overview of their impact and progress.
            </Text>
          </Box>
        </Stack>

        <Box flex={1} mr={{ base: 0, md: 5 }} pos="relative">
          <Image
            boxShadow="lg"
            w="600px"
            h="400px"
            objectFit="cover"
            src={biodiversity.src}
            rounded="lg"
            fallback={<Skeleton />}
            alt={"drivyx project image"}
          />
        </Box>
      </Stack>
    </SectionContainer>
  );
};

export default ShortIntroWithImg;
