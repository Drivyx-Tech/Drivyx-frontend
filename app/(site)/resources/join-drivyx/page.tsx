/* eslint-disable react/no-unescaped-entities */
"use client";

import {
  Heading,
  Text,
  Container,
  VStack,
  HStack,
  OrderedList,
  ListItem,
  Divider,
  Link,
} from "@chakra-ui/react";

const initiatives = [
  "Renewable Energy Initiatives: Transforming the energy landscape with solar, wind, hydro, and geothermal projects.",
  "Sustainable Agriculture: Innovations promoting soil health, water conservation, and biodiversity.",
  "Water Management Projects: Pioneering in watershed restoration and water purification solutions.",
  "Waste Management Solutions: Leading the way in recycling, composting, and waste-to-energy projects.",
  "Green Building Projects: Constructing a sustainable future with eco-friendly building practices.",
  "Conservation Efforts: Protecting our planet’s precious wildlife and natural habitats.",
  "Community Development Programs: Empowering communities through education, healthcare, and social impact.",
  "Climate Tech Innovations: Harnessing technology to combat climate change with solutions like carbon capture and climate resilience software.",
];

const instructionsArray = [
  "Visit Drivyx.com and create your account.",
  "Check out our 'How To' page at Drivyx.com/how-to for a guide on creating your profile and adding your ESG project.",
  "Explore the projects, engage with the community, and start making a difference today.",
];

const page = () => {
  return (
    <Container maxW={"7xl"} p="12">
      <VStack paddingTop="40px" spacing="2" alignItems="flex-start" mb={12}>
        <Heading as="h1" my={12}>
          Join Drivyx: A New Era in Accelerating Global Regeneration
        </Heading>

        <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
          {/* <Image
            borderRadius="full"
            boxSize="40px"
            src="https://100k-faces.glitch.me/random-image"
            alt={`Avatar of ${props.name}`}
          /> */}
          <Text>Author: Akasha Rose</Text>
          <Text>—</Text>
          <Text>04/12/2023</Text>
        </HStack>

        <Text as="p" fontSize="xl" mt={20} mb={6}>
          In a world grappling with environmental challenges, the need for
          trusted sustainable solutions has never been greater. At Drivyx, we
          believe in the power of collaboration and innovation to drive positive
          change. Our platform is more than just a marketplace; it's a community
          dedicated to connecting impactful ESG projects with vital funding
          opportunities.
        </Text>

        <Heading as="h2" size="md" mb={2}>
          The Mission of Drivyx:
        </Heading>
        <Text as="p" fontSize="xl" mb={6}>
          Our mission is simple yet ambitious: to accelerate global
          regeneration. We aim to create a space where projects making real
          differences in sustainability, conservation, and social responsibility
          can find the support they need to thrive and expand their impact.
        </Text>

        <Heading as="h2" size="md" mb={2}>
          What Can You Do on Drivyx?
        </Heading>
        <Heading as="h2" size="md" mb={2} fontWeight={"500"}>
          Drivyx is designed to showcase a variety of ESG projects, including:
        </Heading>

        <OrderedList as="p" fontSize="xl" mb={6}>
          {initiatives.map((initiative, index) => {
            return <ListItem key={index}>{initiative}</ListItem>;
          })}
        </OrderedList>

        <Heading as="h2" size="md" mb={2}>
          Your Role in This Community:
        </Heading>
        <Text as="p" fontSize="xl" mb={6}>
          By joining Drivyx, you're not just participating in a platform; you're
          becoming part of a movement. Whether you're a project leader seeking
          funding or an investor looking for sustainable ventures, Drivyx is
          where your journey begins.
        </Text>

        <Heading as="h2" size="md" mb={2}>
          How to Get Involved:
        </Heading>
        <OrderedList as="p" fontSize="xl" mb={6}>
          <ListItem>
            Visit{" "}
            <Link
              href={"https://www.drivyx.com"}
              fontWeight={"bold"}
              color={"primary.500"}
            >
              {" "}
              Drivyx.com
            </Link>{" "}
            and create your account.
          </ListItem>
          <ListItem>
            Check out our 'How To' page at{" "}
            <Link
              href={"https://www.drivyx.com/how-to"}
              fontWeight={"bold"}
              color={"primary.500"}
            >
              {" "}
              Drivyx.com/how-to
            </Link>{" "}
            for a guide on creating your profile and adding your ESG project.
          </ListItem>
          <ListItem>
            Explore the projects, engage with the community, and start making a
            difference today.
          </ListItem>
        </OrderedList>

        <Heading as="h2" size="md" mb={2}>
          We Need Your Voice:
        </Heading>
        <Text as="p" fontSize="xl" mb={6}>
          As we grow, your feedback is crucial. We are in a phase of gathering
          insights and experiences to enhance Drivyx, ensuring it truly serves
          the needs of the ESG community.
        </Text>

        <Heading as="h2" size="md" mb={2}>
          Start Now:
        </Heading>
        <Text as="p" fontSize="xl" mb={6}>
          Join us on this journey to foster a sustainable future. Visit Drivyx
          today, add your project, or explore how you can contribute to global
          regeneration. Your involvement could be the catalyst for change. Let's
          drive the world towards a sustainable tomorrow, together.
        </Text>
      </VStack>
    </Container>
  );
};

export default page;
