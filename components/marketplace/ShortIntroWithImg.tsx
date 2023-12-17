import SectionContainer from "@/ui/SectionContainer";
import {
  Box,
  Skeleton,
  Stack,
  Image,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import biodiversity from "public/images/ev-img.jpeg";

const ShortIntroWithImg = () => {
  return (
    <SectionContainer my={{ base: 10, lg: 16 }}>
      <Stack
        direction={{ base: "column", md: "row" }}
        justifyItems="center"
        gap={[4, 6, 8, 14]}
      >
        <Stack flex={2} direction="column" spacing={8} justifyContent="center">
          <Text textStyle={"heading"}>
            Discover Sustainable Projects Making a Positive Impact on Our Future
          </Text>
          <Box>
            <Text textStyle={"context"}>
              Explore our curated selection of featured projects that are
              driving sustainability forward. Each project showcases its goals,
              funding status, and estimated completion date, giving you a
              comprehensive overview of their impact and progress.
            </Text>
          </Box>
        </Stack>

        <Box
          flex={1}
          justifyItems={"center"}
          mr={{ base: 0, md: 5 }}
          w={{ base: "100%", md: "auto" }}
        >
          <Image
            maxH={"400px"}
            w={"100%"}
            boxShadow="lg"
            objectFit="cover"
            src={biodiversity.src}
            rounded="lg"
            fallback={<Skeleton />}
            alt={"drivyx project image"}
            loading="lazy"
          />
        </Box>
      </Stack>
    </SectionContainer>
  );
};

export default ShortIntroWithImg;
