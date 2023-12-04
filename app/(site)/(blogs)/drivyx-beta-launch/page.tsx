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
  UnorderedList,
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
          Drivyx Beta Launch: Paving the Way for Blockchain and AI Integration
          in 2024
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
          We are thrilled to announce that Drivyx has officially entered its
          beta phase! As we embark on this journey, our platform is set to
          revolutionize the ESG investment landscape. While we currently open
          our doors to projects showcasing their impactful work, we're excited
          to share that Drivyx's roadmap for 2024 includes groundbreaking
          advancements in blockchain and AI technologies.
        </Text>

        <Heading as="h2" size="md" mb={2}>
          The Present: Drivyx Beta Phase
        </Heading>
        <Text as="p" fontSize="xl" mb={6}>
          In this beta phase, our primary goal is to create a robust and dynamic
          platform where projects dedicated to environmental, social, and
          governance (ESG) goals can present their work to a global audience.
          This phase is crucial for us to gather feedback, fine-tune
          functionalities, and ensure that Drivyx not only meets but exceeds the
          expectations of our users. We invite project owners to join us in this
          foundational stage, where every feedback and interaction shapes the
          future of Drivyx.
        </Text>

        <Heading as="h2" size="md" mb={2}>
          The Future: Blockchain and AI in 2024
        </Heading>
        <Heading as="h2" size="md" mb={2} fontWeight={"500"}>
          Looking ahead to 2024, Drivyx is set to embark on an exciting phase of
          technological integration:
        </Heading>

        <OrderedList as="p" fontSize="xl" mb={6}>
          <ListItem>
            Blockchain Technology:
            <UnorderedList>
              <ListItem>
                Transparency and Trust: With blockchain, every transaction and
                investment on Drivyx will be transparent, secure, and
                tamper-proof. This technology fosters trust among users and
                ensures accountability for all parties involved.
              </ListItem>
              <ListItem>
                Smart Contracts: The use of smart contracts will streamline
                processes, making investment transactions seamless, efficient,
                and automated.
              </ListItem>
            </UnorderedList>
          </ListItem>
          <ListItem>
            AI Integration:
            <UnorderedList>
              <ListItem>
                Enhanced Project Matching: AI algorithms will analyze investor
                preferences and project requirements, facilitating perfect
                matches between ESG projects and potential investors.
              </ListItem>
              <ListItem>
                Data-Driven Insights: Leveraging AI, Drivyx will provide
                valuable insights into market trends, project impacts, and
                investment opportunities, empowering users to make informed
                decisions.
              </ListItem>
            </UnorderedList>
          </ListItem>
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
          {instructionsArray.map((instructions, index) => {
            return <ListItem key={index}>{instructions}</ListItem>;
          })}
        </OrderedList>

        <Heading as="h2" size="md" mb={2}>
          Join Us on This Exciting Journey
        </Heading>
        <Text as="p" fontSize="xl" mb={6}>
          As we progress through our beta phase and look forward to the
          integration of blockchain and AI, we invite you to be a part of this
          revolutionary journey. Your participation and feedback are vital to
          us. Whether you're a project owner, an investor, or an enthusiast in
          the ESG space, your engagement with Drivyx today will contribute
          significantly to the shape of our platform tomorrow.
        </Text>

        <Heading as="h2" size="md" mb={2}>
          Start Now:
        </Heading>
        <Text as="p" fontSize="xl" mb={6}>
          We encourage you to visit Drivyx, explore the projects that are
          already making a difference, and share your valuable feedback. Your
          insights will be instrumental in enhancing the platform's features and
          usability. Together, let’s build a future where technology and
          sustainability go hand in hand for a better world.
        </Text>

        <Text as={"i"}>
          Discover the future of ESG investing. Visit
          <Link
            href={"https://www.drivyx.com/"}
            fontWeight={"bold"}
            color={"primary.500"}
          >
            {" "}
            Drivyx
          </Link>{" "}
          now and be a part of our growth story.
        </Text>
      </VStack>
    </Container>
  );
};

export default page;
