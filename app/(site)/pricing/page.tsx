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

function Pricing() {
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
          <Highlight
            query="Drivyx Beta"
            styles={{ fontWeight: "bold", color: "primary.600" }}
          >
            Drivyx Beta - Free Access for Early Users
          </Highlight>
        </Heading>
        <Text color={"gray.600"} fontSize={"xl"}>
          Welcome to Drivyx, where sustainability meets innovation! As we
          continue to evolve and enhance our platform, we are thrilled to offer
          free access to Drivyx during our beta phase for our valued early
          users. Take advantage of this exclusive opportunity to explore and
          engage with our double-sided marketplace at no cost.
        </Text>
      </Stack>

      <Stack spacing={4} as={Container} maxW={"5xl"} textAlign={"left"} mb={20}>
        <Heading mb={8} fontSize={"2xl"}>
          Current Status: Beta Access
        </Heading>

        <Text color={"gray.600"} fontSize={"xl"}>
          Identify ESG Projects: Scout for local projects that align with
          Drivyx's commitment to sustainability, biodiversity, circular economy,
          and regenerative design.
        </Text>
      </Stack>

      <Stack spacing={4} as={Container} maxW={"5xl"} textAlign={"left"} mb={20}>
        <Heading mb={8} fontSize={"2xl"}>
          What's Included in Beta Access:
        </Heading>

        <UnorderedList spacing={6}>
          <ListItem color={"gray.600"} fontSize={"xl"}>
            Full access to the Drivyx marketplace.
          </ListItem>
          <ListItem color={"gray.600"} fontSize={"xl"}>
            Ability to create and showcase your sustainability projects.
          </ListItem>
          <ListItem color={"gray.600"} fontSize={"xl"}>
            Connect with like-minded investors and contributors.
          </ListItem>
          <ListItem color={"gray.600"} fontSize={"xl"}>
            Explore the diverse range of projects within the Drivyx community.
          </ListItem>
        </UnorderedList>
      </Stack>

      <Stack pt={16} textAlign={"center"}>
        <Heading mb={8} fontSize={"3xl"} color="primary.600">
          JOIN NOW
        </Heading>

        <Stack
          spacing={4}
          as={Container}
          maxW={"5xl"}
          textAlign={"left"}
          mb={20}
        >
          <Heading mb={8} fontSize={"2xl"}>
            Subscription Model Coming Soon:
          </Heading>

          <Text color={"gray.600"} fontSize={"xl"}>
            In the near future, Drivyx will introduce a subscription model to
            sustain and enhance our platform. This subscription will enable us
            to continue providing valuable features and services while
            maintaining a robust and secure environment for our users.
          </Text>
        </Stack>

        <Stack
          spacing={4}
          as={Container}
          maxW={"5xl"}
          textAlign={"left"}
          mb={20}
        >
          <Heading mb={8} fontSize={"2xl"}>
            What to Expect with the Subscription Model:
          </Heading>

          <UnorderedList spacing={6}>
            <ListItem color={"gray.600"} fontSize={"xl"}>
              Advanced project management tools.
            </ListItem>
            <ListItem color={"gray.600"} fontSize={"xl"}>
              Enhanced visibility and promotional opportunities for projects.
            </ListItem>
            <ListItem color={"gray.600"} fontSize={"xl"}>
              Priority access to new features and updates.
            </ListItem>
            <ListItem color={"gray.600"} fontSize={"xl"}>
              Dedicated support for subscription members.
            </ListItem>
          </UnorderedList>
        </Stack>
      </Stack>

      <Stack spacing={4} as={Container} maxW={"5xl"} textAlign={"left"} mb={20}>
        <Heading mb={8} fontSize={"2xl"}>
          Stay Informed:
        </Heading>

        <Text color={"gray.600"} fontSize={"xl"}>
          We'll keep you informed about the upcoming subscription model,
          including pricing details and additional benefits. Your feedback
          during our beta phase is invaluable and will help shape the
          subscription offering.
        </Text>
      </Stack>

      <Stack spacing={4} as={Container} maxW={"5xl"} textAlign={"left"} mb={20}>
        <Heading mb={8} fontSize={"2xl"}>
          Our Commitment:
        </Heading>

        <Text color={"gray.600"} fontSize={"xl"}>
          We'll keep you informed about the upcoming subscription model,
          including pricing details and additional benefits. Your feedback
          during our beta phase is invaluable and will help shape the
          subscription offering.
        </Text>
      </Stack>

      <Stack spacing={4} as={Container} maxW={"5xl"} textAlign={"left"} mb={20}>
        <Heading mb={8} fontSize={"2xl"}>
          Stay Informed:
        </Heading>

        <Text color={"gray.600"} fontSize={"xl"}>
          Drivyx is committed to fostering a sustainable future. By introducing
          a subscription model, we aim to ensure the longevity and growth of our
          platform, allowing us to continue supporting impactful sustainability
          projects and connecting passionate individuals and organizations.
        </Text>

        <Text color={"gray.600"} fontSize={"xl"}>
          Thank you for being part of the Drivyx community and contributing to
          positive change. We look forward to your continued involvement as we
          shape the future of sustainable innovation together.
        </Text>
      </Stack>
    </SectionContainer>
  );
}

export default Pricing;
