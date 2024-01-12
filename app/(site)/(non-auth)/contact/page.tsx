import {
  Container,
  Stack,
  VStack,
  Flex,
  Text,
  Box,
  SimpleGrid,
  Link,
  Highlight,
  Image,
  HStack,
} from "@chakra-ui/react";
import SectionContainer from "@/ui/SectionContainer";
import ContactForm from "@/ui/Form/ContactForm";
import support from "@/public/icon/support.svg";
import interview from "@/public/icon/interview.svg";
import partner from "@/public/icon/partner.svg";
import MediaButton from "@/components/contact/MediaButton";
import { Metadata } from "next";
import { ROUTE_PATH } from "@/constants/ROUTE_PATH";
import Navbar from "@/components/menu/WithSubnavigation";
import leavesBg from "@/public/images/fog-tree-bg.jpeg";

export const metadata: Metadata = {
  title: "Drivyx ESG | Contact",
  description:
    "For general questions or information about Drivyx, please contact our dedicated support team at support@drivyx.com. If you are interested in exploring partnership opportunities or collaborations with Drivyx, please reach out to our partnerships team at partnerships@drivyx.com. For media inquiries, press releases, or interview requests, please contact our media relations team at media@drivyx.com",
};

interface FeatureProps {
  title: string;
  text: string;
  icon: any;
  email: string;
}

const Feature = ({ title, text, icon, email }: FeatureProps) => {
  return (
    <Stack maxW={"350px"}>
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"white"}
        mb={1}
      >
        <Image src={icon.src} alt={title} w={10} h={10} />
      </Flex>
      <Text textStyle={"smContext"} fontWeight={"600"}>
        {title}
      </Text>
      <Text textStyle={"xsContext"}>
        <Highlight
          query={email}
          styles={{ fontWeight: "bold", color: "primary.600" }}
        >
          {text}
        </Highlight>
      </Text>
    </Stack>
  );
};

function Contact() {
  return (
    <div>
      <Navbar navTheme="dark" />
      <VStack pt={40} pb={24} px={8} w={"full"} bgColor={"#F4EDE4"} gap={12}>
        <Stack
          w={"full"}
          maxW={"3xl"}
          spacing={4}
          as={Container}
          textAlign={"center"}
          mb={8}
        >
          <Text textStyle={"heading"} mb={8}>
            Contact Us
          </Text>
          <Text textStyle={"context"}>
            Thank you for your interest in Drivyx! We're here to assist you and
            welcome any inquiries, feedback, or collaboration opportunities.
            Please feel free to reach out to us through the following channels.
          </Text>
        </Stack>

        <Box p={4} w={"full"} maxW={"7xl"}>
          <SimpleGrid
            columns={{ base: 1, md: 2, xl: 3 }}
            spacing={10}
            justifyItems={"center"}
          >
            <Feature
              icon={support}
              title={"General Inquiries"}
              text={
                "For general questions or information about Drivyx, please contact our dedicated support team at support@drivyx.com"
              }
              email={"support@drivyx.com"}
            />
            <Feature
              icon={partner}
              title={"Partnerships and Collaborations"}
              text={
                "If you are interested in exploring partnership opportunities or collaborations with Drivyx, please reach out to our partnerships team at partnerships@drivyx.com"
              }
              email={"partnerships@drivyx.com"}
            />
            <Feature
              icon={interview}
              title={"Media and Press Inquiries"}
              text={
                "For media inquiries, press releases, or interview requests, please contact our media relations team at media@drivyx.com"
              }
              email={"media@drivyx.com"}
            />
          </SimpleGrid>
        </Box>
      </VStack>

      <Stack
        w={"full"}
        flexDir={{ base: "column", lg: "row" }}
        justify={"center"}
        align="center"
        bgColor={"primary.800"}
        py={28}
        px={8}
        gap={8}
      >
        <VStack spacing={{ base: 10, lg: 20 }}>
          <Stack as={Container} textAlign={"center"}>
            <Text textColor={"white"} mb={4} textStyle={"subheading"}>
              Career Opportunities
            </Text>
            <Text textColor={"white"} textStyle={"context"}>
              To learn more about career opportunities at Drivyx, please visit
              our{" "}
              <Link
                fontWeight={600}
                color={"primary.600"}
                href={ROUTE_PATH.NON_AUTH.CAREERS}
              >
                Careers
              </Link>{" "}
              page.
            </Text>
          </Stack>

          <Stack as={Container} textAlign={"center"}>
            <Text textColor={"white"} mb={4} textStyle={"subheading"}>
              Social Media
            </Text>
            <Text textColor={"white"} textStyle={"context"}>
              Stay connected with us on our social media channels for the latest
              updates, news, and insights
            </Text>

            <MediaButton />
          </Stack>
        </VStack>

        <ContactForm />
      </Stack>

      <Stack w={"full"} h={"full"}>
        <Stack spacing={4} as={Container} maxW={"5xl"} my={24}>
          <Text mb={8} textStyle={"subheading"}>
            Feedback
          </Text>
          <Text textStyle={"smContext"}>
            Your feedback is invaluable to us. If you've had an experience with
            Drivyx and would like to share your thoughts, please fill out our
            form below.
          </Text>
          <Text textStyle={"smContext"}>
            We appreciate your interest in Drivyx and look forward to connecting
            with you!
          </Text>
          <Text mt={8} textStyle={"smContext"}>
            Best Regards,
          </Text>
          <Text textStyle={"smContext"}>The Drivyx Team</Text>
        </Stack>
      </Stack>
    </div>
  );
}

export default Contact;
