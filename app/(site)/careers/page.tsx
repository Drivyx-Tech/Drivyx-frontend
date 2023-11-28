/* eslint-disable react/no-unescaped-entities */
import SectionContainer from "@/ui/SectionContainer";
import {
  Container,
  Heading,
  Highlight,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";

function Careers() {
  return (
    <SectionContainer my={{ base: 10, lg: 16 }}>
      <Stack
        spacing={4}
        as={Container}
        maxW={"5xl"}
        textAlign={"center"}
        mb={20}
      >
        <Heading mb={8} fontSize={"3xl"}>
          Careers: Join Drivyx as a Local On-the-Ground Ambassador
        </Heading>
        <Text color={"gray.600"} fontSize={"xl"}>
          Are you passionate about sustainability and making a positive impact
          in your community? Drivyx is on the lookout for dedicated individuals
          to join us as Local On-the-Ground Ambassadors. As an Ambassador, you
          will play a crucial role in identifying and onboarding ESG
          (Environmental, Social, Governance) projects that are making a
          difference and seeking funding onto the Drivyx platform.
        </Text>
      </Stack>

      <Stack spacing={4} as={Container} maxW={"5xl"} textAlign={"left"} mb={20}>
        <Heading mb={8} fontSize={"2xl"}>
          Why Become a Drivyx Ambassador:
        </Heading>

        <Text color={"gray.600"} fontSize={"xl"}>
          <Highlight
            query="Drive Positive Change:"
            styles={{ fontWeight: "bold", color: "black" }}
          >
            Drive Positive Change: Contribute to the global shift towards
            sustainability by identifying and promoting impactful ESG projects
            in your local community.
          </Highlight>
        </Text>
        <Text color={"gray.600"} fontSize={"xl"}>
          <Highlight
            query="Be a Changemaker:"
            styles={{ fontWeight: "bold", color: "black" }}
          >
            Be a Changemaker: Play a pivotal role in connecting environmentally
            conscious investors with projects aligned with their values.
          </Highlight>
        </Text>
        <Text color={"gray.600"} fontSize={"xl"}>
          <Highlight
            query="Expand Your Network:"
            styles={{ fontWeight: "bold", color: "black" }}
          >
            Expand Your Network: Join a community of like-minded individuals and
            organizations dedicated to creating a greener, more sustainable
            future.
          </Highlight>
        </Text>
        <Text color={"gray.600"} fontSize={"xl"}>
          <Highlight
            query="Flexible Opportunities:"
            styles={{ fontWeight: "bold", color: "black" }}
          >
            Flexible Opportunities: As a Local On-the-Ground Ambassador, you'll
            have the flexibility to work at your own pace while actively
            contributing to the growth of Drivyx.
          </Highlight>
        </Text>
      </Stack>

      <Stack spacing={4} as={Container} maxW={"5xl"} textAlign={"left"} mb={20}>
        <Heading mb={8} fontSize={"2xl"}>
          Responsibilities:
        </Heading>

        <Text color={"gray.600"} fontSize={"xl"}>
          <Highlight
            query="Identify ESG Projects:"
            styles={{ fontWeight: "bold", color: "black" }}
          >
            Identify ESG Projects: Scout for local projects that align with
            Drivyx's commitment to sustainability, biodiversity, circular
            economy, and regenerative design.
          </Highlight>
        </Text>
        <Text color={"gray.600"} fontSize={"xl"}>
          <Highlight
            query="Engage Project Owners:"
            styles={{ fontWeight: "bold", color: "black" }}
          >
            Engage Project Owners: Reach out to project owners, fostering
            relationships and explaining the benefits of joining the Drivyx
            platform.
          </Highlight>
        </Text>
        <Text color={"gray.600"} fontSize={"xl"}>
          <Highlight
            query="Onboard Projects:"
            styles={{ fontWeight: "bold", color: "black" }}
          >
            Onboard Projects: Guide and assist project owners in the process of
            creating and showcasing their initiatives on Drivyx, ensuring a
            smooth onboarding experience.
          </Highlight>
        </Text>
        <Text color={"gray.600"} fontSize={"xl"}>
          <Highlight
            query="Community Outreach:"
            styles={{ fontWeight: "bold", color: "black" }}
          >
            Community Outreach: Act as a liaison between Drivyx and the local
            sustainability community, participating in events and initiatives to
            raise awareness about our platform.
          </Highlight>
        </Text>
        <Text color={"gray.600"} fontSize={"xl"}>
          <Highlight
            query="Provide Feedback:"
            styles={{ fontWeight: "bold", color: "black" }}
          >
            Provide Feedback: Share valuable insights and feedback from the
            local community to help enhance the Drivyx platform.
          </Highlight>
        </Text>
      </Stack>

      <Stack spacing={4} as={Container} maxW={"5xl"} textAlign={"left"} mb={20}>
        <Heading mb={8} fontSize={"2xl"}>
          Requirements:
        </Heading>

        <UnorderedList spacing={8}>
          <ListItem color={"black"} fontSize={"xl"} fontWeight={"bold"}>
            Passion for sustainability and ESG initiatives.
          </ListItem>
          <ListItem color={"black"} fontSize={"xl"} fontWeight={"bold"}>
            Strong communication and interpersonal skills.
          </ListItem>
          <ListItem color={"black"} fontSize={"xl"} fontWeight={"bold"}>
            Knowledge of local sustainability projects and communities.
          </ListItem>
          <ListItem color={"black"} fontSize={"xl"} fontWeight={"bold"}>
            Ability to work independently and collaboratively.
          </ListItem>
        </UnorderedList>
      </Stack>
    </SectionContainer>
  );
}

export default Careers;
