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
} from "@chakra-ui/react";
import SectionContainer from "@/ui/SectionContainer";
import ContactForm from "@/ui/Form/ContactForm";
import support from "@/public/icon/support.svg";
import interview from "@/public/icon/interview.svg";
import partner from "@/public/icon/partner.svg";
import MediaButton from "@/components/contact/MediaButton";
import { Metadata } from "next";
import { ROUTE_PATH } from "@/constants/ROUTE_PATH";

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
    <Stack>
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"gray.100"}
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
    <SectionContainer my={{ base: 10, lg: 16 }}>
      <SimpleGrid columns={{ base: 1, xl: 2 }} spacing={10}>
        <VStack flex={1}>
          <Stack
            spacing={4}
            as={Container}
            maxW={"5xl"}
            textAlign={"center"}
            mb={20}
          >
            <Text textStyle={"heading"} mb={8}>
              Contact Us
            </Text>
            <Text textStyle={"context"}>
              Thank you for your interest in Drivyx! We're here to assist you
              and welcome any inquiries, feedback, or collaboration
              opportunities. Please feel free to reach out to us through the
              following channels.
            </Text>
          </Stack>

          <Box p={4} mb={20}>
            <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing={10}>
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

        <ContactForm />
      </SimpleGrid>

      <SimpleGrid my={24} columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack
          spacing={4}
          as={Container}
          maxW={"5xl"}
          textAlign={"center"}
          mb={20}
        >
          <Text mb={8} textStyle={"subheading"}>
            Career Opportunities
          </Text>
          <Text textStyle={"context"}>
            To learn more about career opportunities at Drivyx, please visit our{" "}
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

        <Stack
          spacing={4}
          as={Container}
          maxW={"5xl"}
          textAlign={"center"}
          mb={20}
        >
          <Text mb={8} textStyle={"subheading"}>
            Social Media
          </Text>
          <Text textStyle={"context"}>
            Stay connected with us on our social media channels for the latest
            updates, news, and insights
          </Text>

          <MediaButton />
        </Stack>
      </SimpleGrid>

      <Stack spacing={4} as={Container} maxW={"5xl"} mb={20}>
        <Text mb={8} textStyle={"subheading"}>
          Feedback
        </Text>
        <Text textStyle={"smContext"}>
          Your feedback is invaluable to us. If you've had an experience with
          Drivyx and would like to share your thoughts, please fill out our form
          below.
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
    </SectionContainer>
  );
}

export default Contact;
