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

const drivyxInformation = [
  "Diverse Project Portfolio: From renewable energy initiatives to sustainable agriculture, our platform hosts a wide array of ESG projects. This diversity allows you to invest in projects that align not only with your financial goals but also with your values.",
  "Global Reach: Drivyx breaks geographical barriers, presenting investment opportunities from around the world. This global approach widens your investment scope and impact potential.",
  "Vetted Opportunities: We understand the importance of due diligence in investment. Projects on Drivyx are thoroughly vetted, ensuring that you invest in ventures that are not only promising but also adhere to high standards of sustainability and governance.",
  "Impact Measurement: For impact investors, measuring the societal and environmental impact is crucial. Our platform provides detailed insights into the potential impact of each project, aiding in informed decision-making.",
  "Streamlined Process: Drivyx simplifies the process of ESG investing. From discovery to due diligence to investment, our platform is designed for ease and efficiency.",
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
          Drivyx: Revolutionizing ESG Investment Opportunities for a Sustainable
          Future
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
          In today’s rapidly evolving economic landscape, venture capitalists
          and impact investors are increasingly looking towards investments that
          not only yield financial returns but also drive positive environmental
          and social change. At Drivyx, we recognize this shift and have created
          a platform that aligns perfectly with the aspirations of
          forward-thinking investors. Our mission: to connect you with a diverse
          array of ESG projects worldwide, thereby accelerating global
          regeneration.
        </Text>

        <Heading as="h2" size="md" mb={2}>
          The Drivyx Advantage for Investors:
        </Heading>
        <Heading as="h2" size="md" mb={2} fontWeight={"500"}>
          Drivyx stands as a unique proposition in the world of ESG investing.
          Here's why our platform is an indispensable tool for investors:
        </Heading>

        <OrderedList as="p" fontSize="xl" mb={6}>
          {drivyxInformation.map((drivyxInformation, index) => {
            return <ListItem key={index}>{drivyxInformation}</ListItem>;
          })}
        </OrderedList>

        <Heading as="h2" size="md" mb={2}>
          Why ESG Investing and Why Now?
        </Heading>
        <Text as="p" fontSize="xl" mb={6}>
          The world is at a pivotal point. The challenges of climate change,
          social inequality, and environmental degradation are more pressing
          than ever. Investing in ESG projects is no longer just a moral choice;
          it’s a strategic one. ESG investments tend to be more resilient,
          future-proof, and are increasingly preferred by consumers and
          stakeholders. By investing in ESG projects, you're not just securing
          financial returns; you're actively shaping a sustainable and equitable
          world.
        </Text>

        <Heading as="h2" size="md" mb={2}>
          Your Role in Global Regeneration:
        </Heading>
        <Text as="p" fontSize="xl" mb={6}>
          As an investor, you hold the power to catalyze significant change.
          Your investment can propel innovative solutions to environmental and
          social challenges, creating a ripple effect of positive impact. By
          partnering with projects through Drivyx, you are taking an active role
          in global regeneration efforts.
        </Text>

        <Heading as="h2" size="md" mb={2}>
          Join Us in Shaping the Future:
        </Heading>
        <Text as="p" fontSize="xl" mb={6}>
          We invite you to explore Drivyx and discover projects that resonate
          with your investment philosophy. Whether you’re a seasoned impact
          investor or a venture capitalist seeking sustainable ventures, Drivyx
          offers a gateway to meaningful investments.
        </Text>

        <Heading as="h2" size="md" mb={2}>
          Start Now:
        </Heading>
        <Text as="p" fontSize="xl" mb={6}>
          Visit Drivyx today. Explore a world of ESG investment opportunities
          and join us in our mission to accelerate global regeneration. Your
          investment has the power to drive change. Let’s harness that power
          together for a sustainable and prosperous future.
        </Text>

        <Text as="i">
          Discover the potential at
          <Link
            href={"https://www.drivyx.com/"}
            fontWeight={"bold"}
            color={"primary.500"}
          >
            {" "}
            Drivyx
          </Link>{" "}
          – Where investment meets impact.
        </Text>
      </VStack>
    </Container>
  );
};

export default page;
