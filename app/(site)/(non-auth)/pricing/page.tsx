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
import { Metadata } from "next";
import Navbar from "@/components/menu/WithSubnavigation";

export const metadata: Metadata = {
  title: "Drivyx ESG | Pricing",
  description:
    "Drivyx Beta - Free Access for Early Users. As we continue to evolve and enhance our platform, we are thrilled to offer free access to Drivyx during our beta phase for our valued early users. Take advantage of this exclusive opportunity to explore and engage with our double-sided marketplace at no cost.",
};

function Pricing() {
  return (
    <div>
      <Navbar navTheme="dark" />
      <div style={{ marginTop: "70px" }}>
        <SectionContainer my={{ base: 6, lg: 10 }}>
          <Stack
            spacing={10}
            as={Container}
            maxW={"5xl"}
            textAlign={"center"}
            mb={20}
          >
            <Text textStyle={"heading"}>
              <Highlight
                query=" Drivyx Beta"
                styles={{ fontWeight: "bold", color: "primary.600" }}
              >
                Drivyx Beta - Free Access for Early Users
              </Highlight>
            </Text>
            <Text textStyle={"context"}>
              Welcome to Drivyx, where sustainability meets innovation! As we
              continue to evolve and enhance our platform, we are thrilled to
              offer free access to Drivyx during our beta phase for our valued
              early users. Take advantage of this exclusive opportunity to
              explore and engage with our double-sided marketplace at no cost.
            </Text>
          </Stack>

          <Stack
            spacing={4}
            as={Container}
            maxW={"5xl"}
            textAlign={"left"}
            mb={20}
          >
            <Text mb={8} textStyle={"smBold"}>
              Current Status: Beta Access
            </Text>

            <Text textStyle={"smContext"}>
              Identify ESG Projects: Scout for local projects that align with
              Drivyx's commitment to sustainability, biodiversity, circular
              economy, and regenerative design.
            </Text>
          </Stack>

          <Stack
            spacing={4}
            as={Container}
            maxW={"5xl"}
            textAlign={"left"}
            mb={20}
          >
            <Text mb={8} textStyle={"smBold"}>
              What's Included in Beta Access:
            </Text>

            <UnorderedList spacing={6}>
              <ListItem textStyle={"smContext"}>
                Full access to the Drivyx marketplace.
              </ListItem>
              <ListItem textStyle={"smContext"}>
                Ability to create and showcase your sustainability projects.
              </ListItem>
              <ListItem textStyle={"smContext"}>
                Connect with like-minded investors and contributors.
              </ListItem>
              <ListItem textStyle={"smContext"}>
                Explore the diverse range of projects within the Drivyx
                community.
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
              <Text mb={8} textStyle={"smBold"}>
                Subscription Model Coming Soon:
              </Text>

              <Text textStyle={"smContext"}>
                In the near future, Drivyx will introduce a subscription model
                to sustain and enhance our platform. This subscription will
                enable us to continue providing valuable features and services
                while maintaining a robust and secure environment for our users.
              </Text>
            </Stack>

            <Stack
              spacing={4}
              as={Container}
              maxW={"5xl"}
              textAlign={"left"}
              mb={20}
            >
              <Text mb={8} textStyle={"smBold"}>
                What to Expect with the Subscription Model:
              </Text>

              <UnorderedList spacing={6}>
                <ListItem textStyle={"smContext"}>
                  Advanced project management tools.
                </ListItem>
                <ListItem textStyle={"smContext"}>
                  Enhanced visibility and promotional opportunities for
                  projects.
                </ListItem>
                <ListItem textStyle={"smContext"}>
                  Priority access to new features and updates.
                </ListItem>
                <ListItem textStyle={"smContext"}>
                  Dedicated support for subscription members.
                </ListItem>
              </UnorderedList>
            </Stack>
          </Stack>

          <Stack
            spacing={4}
            as={Container}
            maxW={"5xl"}
            textAlign={"left"}
            mb={20}
          >
            <Text mb={8} textStyle={"smBold"}>
              Stay Informed:
            </Text>

            <Text textStyle={"smContext"}>
              We'll keep you informed about the upcoming subscription model,
              including pricing details and additional benefits. Your feedback
              during our beta phase is invaluable and will help shape the
              subscription offering.
            </Text>
          </Stack>

          <Stack
            spacing={4}
            as={Container}
            maxW={"5xl"}
            textAlign={"left"}
            mb={20}
          >
            <Text mb={8} textStyle={"smBold"}>
              Our Commitment:
            </Text>

            <Text textStyle={"smContext"}>
              We'll keep you informed about the upcoming subscription model,
              including pricing details and additional benefits. Your feedback
              during our beta phase is invaluable and will help shape the
              subscription offering.
            </Text>
          </Stack>

          <Stack
            spacing={4}
            as={Container}
            maxW={"5xl"}
            textAlign={"left"}
            mb={20}
          >
            <Text mb={8} textStyle={"smBold"}>
              Stay Informed:
            </Text>

            <Text textStyle={"smContext"}>
              Drivyx is committed to fostering a sustainable future. By
              introducing a subscription model, we aim to ensure the longevity
              and growth of our platform, allowing us to continue supporting
              impactful sustainability projects and connecting passionate
              individuals and organizations.
            </Text>

            <Text textStyle={"smContext"}>
              Thank you for being part of the Drivyx community and contributing
              to positive change. We look forward to your continued involvement
              as we shape the future of sustainable innovation together.
            </Text>
          </Stack>
        </SectionContainer>
      </div>
    </div>
  );
}

export default Pricing;
