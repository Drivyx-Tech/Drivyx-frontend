import SectionContainer from "@/ui/SectionContainer";
import {
  Container,
  Highlight,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drivyx ESG | Careers",
  description:
    "Are you passionate about sustainability and making a positive impact in your community? Drivyx is on the lookout for dedicated individuals to join us as Local On-the-Ground Ambassadors. As an Ambassador, you will play a crucial role in identifying and onboarding ESG (Environmental, Social, Governance) projects that are making a difference and seeking funding onto the Drivyx platform.",
};

function Careers() {
  return (
    <SectionContainer my={{ base: 10, lg: 16 }}>
      <Stack
        spacing={10}
        as={Container}
        maxW={"5xl"}
        textAlign={"center"}
        mb={20}
      >
        <Text textStyle={"heading"}>
          <Highlight
            query="Careers:"
            styles={{ fontWeight: "bold", color: "primary.600" }}
          >
            Careers: Join Drivyx as a Local On-the-Ground Ambassador
          </Highlight>
        </Text>
        <Text textStyle={"context"}>
          Are you passionate about sustainability and making a positive impact
          in your community? Drivyx is on the lookout for dedicated individuals
          to join us as Local On-the-Ground Ambassadors. As an Ambassador, you
          will play a crucial role in identifying and onboarding ESG
          (Environmental, Social, Governance) projects that are making a
          difference and seeking funding onto the Drivyx platform.
        </Text>
      </Stack>

      <Stack spacing={4} as={Container} maxW={"5xl"} textAlign={"left"} mb={20}>
        <Text mb={8} textStyle={"subheading"}>
          Why Become a Drivyx Ambassador:
        </Text>

        <Text textStyle={"smContext"}>
          <Highlight
            query="Drive Positive Change:"
            styles={{ fontWeight: "bold", color: "secondary.800" }}
          >
            Drive Positive Change: Contribute to the global shift towards
            sustainability by identifying and promoting impactful ESG projects
            in your local community.
          </Highlight>
        </Text>
        <Text textStyle={"smContext"}>
          <Highlight
            query="Be a Changemaker:"
            styles={{ fontWeight: "bold", color: "secondary.800" }}
          >
            Be a Changemaker: Play a pivotal role in connecting environmentally
            conscious investors with projects aligned with their values.
          </Highlight>
        </Text>
        <Text textStyle={"smContext"}>
          <Highlight
            query="Expand Your Network:"
            styles={{ fontWeight: "bold", color: "secondary.800" }}
          >
            Expand Your Network: Join a community of like-minded individuals and
            organizations dedicated to creating a greener, more sustainable
            future.
          </Highlight>
        </Text>
        <Text textStyle={"smContext"}>
          <Highlight
            query="Flexible Opportunities:"
            styles={{ fontWeight: "bold", color: "secondary.800" }}
          >
            Flexible Opportunities: As a Local On-the-Ground Ambassador, you'll
            have the flexibility to work at your own pace while actively
            contributing to the growth of Drivyx.
          </Highlight>
        </Text>
      </Stack>

      <Stack spacing={4} as={Container} maxW={"5xl"} textAlign={"left"} mb={20}>
        <Text mb={8} textStyle={"subheading"}>
          Responsibilities:
        </Text>

        <Text textStyle={"smContext"}>
          <Highlight
            query="Identify ESG Projects:"
            styles={{ fontWeight: "bold", color: "secondary.800" }}
          >
            Identify ESG Projects: Scout for local projects that align with
            Drivyx's commitment to sustainability, biodiversity, circular
            economy, and regenerative design.
          </Highlight>
        </Text>
        <Text textStyle={"smContext"}>
          <Highlight
            query="Engage Project Owners:"
            styles={{ fontWeight: "bold", color: "secondary.800" }}
          >
            Engage Project Owners: Reach out to project owners, fostering
            relationships and explaining the benefits of joining the Drivyx
            platform.
          </Highlight>
        </Text>
        <Text textStyle={"smContext"}>
          <Highlight
            query="Onboard Projects:"
            styles={{ fontWeight: "bold", color: "secondary.800" }}
          >
            Onboard Projects: Guide and assist project owners in the process of
            creating and showcasing their initiatives on Drivyx, ensuring a
            smooth onboarding experience.
          </Highlight>
        </Text>
        <Text textStyle={"smContext"}>
          <Highlight
            query="Community Outreach:"
            styles={{ fontWeight: "bold", color: "secondary.800" }}
          >
            Community Outreach: Act as a liaison between Drivyx and the local
            sustainability community, participating in events and initiatives to
            raise awareness about our platform.
          </Highlight>
        </Text>
        <Text textStyle={"smContext"}>
          <Highlight
            query="Provide Feedback:"
            styles={{ fontWeight: "bold", color: "secondary.800" }}
          >
            Provide Feedback: Share valuable insights and feedback from the
            local community to help enhance the Drivyx platform.
          </Highlight>
        </Text>
      </Stack>

      <Stack spacing={4} as={Container} maxW={"5xl"} textAlign={"left"} mb={20}>
        <Text mb={8} textStyle={"subheading"}>
          Requirements:
        </Text>

        <UnorderedList spacing={8}>
          <ListItem textStyle={"smContext"}>
            Passion for sustainability and ESG initiatives.
          </ListItem>
          <ListItem textStyle={"smContext"}>
            Strong communication and interpersonal skills.
          </ListItem>
          <ListItem textStyle={"smContext"}>
            Knowledge of local sustainability projects and communities.
          </ListItem>
          <ListItem textStyle={"smContext"}>
            Ability to work independently and collaboratively.
          </ListItem>
        </UnorderedList>
      </Stack>
    </SectionContainer>
  );
}

export default Careers;
