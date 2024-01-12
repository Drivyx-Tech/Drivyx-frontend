import SectionContainer from "@/ui/SectionContainer";
import {
  Container,
  Highlight,
  List,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import { PHASES_ITEMS } from "@/constants/PHASES_ITEMS";
import { Metadata } from "next";
import Navbar from "@/components/menu/WithSubnavigation";

export const metadata: Metadata = {
  title: "Drivyx ESG | Roadmap",
  description: "Shaping the Future of Sustainable Investing with Drivyx",
};

function Roadmap() {
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
            mb={24}
          >
            <Text textStyle={"heading"}>
              <Highlight
                query="Drivyx Roadmap:"
                styles={{ fontWeight: "bold", color: "primary.600" }}
              >
                Drivyx Roadmap: Shaping the Future of Sustainable Investing
              </Highlight>
            </Text>
            <Text textStyle={"context"}>
              As we envision a future of sustainable innovation, Drivyx is
              committed to continual growth and enhancement. Our roadmap
              outlines the key milestones and features that will shape the
              evolution of our platform.
            </Text>
          </Stack>

          <Stack
            spacing={4}
            as={Container}
            maxW={"5xl"}
            textAlign={"left"}
            mb={20}
          >
            {PHASES_ITEMS.map((phase, index) => {
              return (
                <Stack key={index} spacing={2} mb={8}>
                  <Text mb={8} textStyle={"smBold"}>
                    {phase.name}
                  </Text>

                  <List spacing={8}>
                    <ListItem textStyle={"smContext"}>
                      <Highlight
                        query="Objective:"
                        styles={{ fontWeight: "bold", color: "secondary.800" }}
                      >
                        Objective:
                      </Highlight>{" "}
                      {phase.objective}
                    </ListItem>

                    <ListItem textStyle={"smContext"}>
                      <Highlight
                        query="Key Features:"
                        styles={{ fontWeight: "bold", color: "secondary.800" }}
                      >
                        Key Features:
                      </Highlight>

                      <UnorderedList spacing={2} mt={6}>
                        {phase.keyFeatures.map((feature, index) => (
                          <ListItem key={index} textStyle={"smContext"}>
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
      </div>
    </div>
  );
}

export default Roadmap;
