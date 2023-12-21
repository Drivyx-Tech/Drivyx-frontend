/* eslint-disable react/no-unescaped-entities */
"use client";

import SectionContainer from "@/ui/SectionContainer";
import {
  Container,
  Heading,
  Highlight,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";

const PHASES = [
  {
    name: "Phase 1: Beta Launch",
    objective:
      "Introduce Drivyx as a user-friendly double-sided marketplace connecting investors with impactful sustainability projects.",
    keyFeatures: [
      "Project creation and showcasing",
      "Investor and project owner profiles",
      "Basic marketplace functionality",
    ],
  },
  {
    name: "Phase 2: Early Expansion",
    objective:
      "Expand user base and project diversity while gathering valuable feedback.",
    keyFeatures: [
      "Outreach to local communities",
      "Enhanced project categorization",
      "Community engagement features",
    ],
  },
  {
    name: "Phase 3: Blockchain Integration",
    objective:
      "Leverage blockchain technology for enhanced security, transparency, and efficiency.",
    keyFeatures: [
      "Integration of blockchain wallets for secure transactions",
      "Blockchain-based project verification and certification",
      "Smart contracts for transparent funding processes",
    ],
  },
  {
    name: "Phase 4: AI Matching and Evaluation",
    objective:
      "Implement artificial intelligence to optimize project matching and evaluation.",
    keyFeatures: [
      "AI-driven project matching for investors",
      "Automated project evaluation based on predefined criteria",
      "Intelligent project ranking and suggestions",
    ],
  },
  {
    name: "Phase 5: Global Expansion",
    objective:
      "Extend Drivyx's reach to a global audience, fostering international collaboration.",
    keyFeatures: [
      "Multilingual support",
      "Currency and regulatory compliance",
      "Cross-border project promotion",
    ],
  },
];

function Roadmap() {
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
            query="Drivyx Roadmap:"
            styles={{ fontWeight: "bold", color: "primary.600" }}
          >
            Drivyx Roadmap: - Shaping the Future of Sustainable Investing
          </Highlight>
        </Text>
        <Text color={"gray.600"} fontSize={"xl"}>
          As we envision a future of sustainable innovation, Drivyx is committed
          to continual growth and enhancement. Our roadmap outlines the key
          milestones and features that will shape the evolution of our platform.
        </Text>
      </Stack>

      <Stack spacing={4} as={Container} maxW={"5xl"} textAlign={"left"} mb={20}>
        {PHASES.map((phase, index) => {
          return (
            <Stack key={index} spacing={2} mb={8}>
              <Heading mb={8} fontSize={"2xl"}>
                {phase.name}
              </Heading>

              <List spacing={8}>
                <ListItem color={"gray.600"} fontSize={"xl"}>
                  <Highlight
                    query="Objective:"
                    styles={{ fontWeight: "bold", color: "black" }}
                  >
                    Objective:
                  </Highlight>{" "}
                  {phase.objective}
                </ListItem>

                <ListItem color={"gray.600"} fontSize={"xl"}>
                  <Highlight
                    query="Key Features:"
                    styles={{ fontWeight: "bold", color: "black" }}
                  >
                    Key Features:
                  </Highlight>

                  <UnorderedList spacing={6} mt={6}>
                    {phase.keyFeatures.map((feature, index) => (
                      <ListItem
                        ml={12}
                        key={index}
                        color={"gray.600"}
                        fontSize={"xl"}
                      >
                        {feature}
                      </ListItem>
                    ))}
                  </UnorderedList>
                </ListItem>
              </List>
            </Stack>
          );
        })}
      </Stack>
    </SectionContainer>
  );
}

export default Roadmap;
