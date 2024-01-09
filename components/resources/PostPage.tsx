import React from "react";
import {
  Heading,
  Text,
  Container,
  VStack,
  HStack,
  OrderedList,
  ListItem,
  Divider,
  Image,
  UnorderedList,
  Link,
  Stack,
  Flex,
} from "@chakra-ui/react";
import { urlForImage } from "@/sanity/image";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import GoBackButton from "./GoBackButton";
import { ROUTE_PATH } from "@/constants/ROUTE_PATH";
import { parseISO, format } from "date-fns";
import { CustomPortableText } from "@/ui/PortableTextComponents/CustomPortableText";

function PostPage(props: any) {
  const { loading, post } = props;
  const slug = post?.slug;

  if (!loading && !slug) {
    notFound();
  }

  const imageProps = post?.mainImage ? urlForImage(post?.mainImage) : null;

  const AuthorimageProps = post?.author?.image
    ? urlForImage(post.author.image)
    : null;

  return (
    <Stack mt={"65px"}>
      <Stack w={"full"} h={"400px"} pos={"relative"} align="center">
        <Flex
          pos={"absolute"}
          w={"100%"}
          h={"100%"}
          backgroundImage={
            "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0.2))"
          }
        ></Flex>
        <Image
          src={imageProps?.src}
          w={"full"}
          objectFit={"cover"}
          objectPosition={"center"}
          loading={"lazy"}
          h={"full"}
          alt={post.title}
        />

        <VStack
          pos={"absolute"}
          w={"full"}
          maxW={"7xl"}
          h={"full"}
          //   direction={"column"}
          gap={"8"}
          //   mx={{ base: 10, md: 16, lg: 20 }}
          justify={"center"}
          align="center"
        >
          <Stack w={"full"} align={"left"}>
            <GoBackButton
              text="Blog overview"
              navTo={ROUTE_PATH.NON_AUTH.RESOURCES.HOME}
            />
          </Stack>
          <Stack maxW={"900px"}>
            <Text textStyle={"heading"} my={12} color={"white"}>
              {post.title}
            </Text>
          </Stack>
        </VStack>
      </Stack>

      <Container maxW={"7xl"} p="12" mt={"10px"}>
        <VStack paddingTop="40px" spacing="2" alignItems="flex-start" mb={12}>
          <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
            <Image
              src={AuthorimageProps?.src}
              borderRadius="full"
              boxSize="40px"
              alt={`Avatar of ${props.name}`}
            />
            <Text>Author: {post.author?.name}</Text>
            <Text>—</Text>
            <Text> {format(parseISO(post?.publishedAt), "MMMM dd, yyyy")}</Text>
          </HStack>

          {/* <Text as="p" fontSize="xl" mt={20} mb={6}> */}
          {post.body && (
            <PortableText value={post.body} components={CustomPortableText} />
          )}
          {/* </Text> */}

          <Heading as="h2" size="md" mb={2}>
            The Present: Drivyx Beta Phase
          </Heading>
          <Text as="p" fontSize="xl" mb={6}>
            In this beta phase, our primary goal is to create a robust and
            dynamic platform where projects dedicated to environmental, social,
            and governance (ESG) goals can present their work to a global
            audience. This phase is crucial for us to gather feedback, fine-tune
            functionalities, and ensure that Drivyx not only meets but exceeds
            the expectations of our users. We invite project owners to join us
            in this foundational stage, where every feedback and interaction
            shapes the future of Drivyx.
          </Text>

          <Heading as="h2" size="md" mb={2}>
            The Future: Blockchain and AI in 2024
          </Heading>
          <Heading as="h2" size="md" mb={2} fontWeight={"500"}>
            Looking ahead to 2024, Drivyx is set to embark on an exciting phase
            of technological integration:
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
            By joining Drivyx, you're not just participating in a platform;
            you're becoming part of a movement. Whether you're a project leader
            seeking funding or an investor looking for sustainable ventures,
            Drivyx is where your journey begins.
          </Text>

          <Heading as="h2" size="md" mb={2}>
            How to Get Involved:
          </Heading>
          <OrderedList as="p" fontSize="xl" mb={6}>
            <ListItem>xx</ListItem>;
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
            insights will be instrumental in enhancing the platform's features
            and usability. Together, let’s build a future where technology and
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
    </Stack>
  );
}

export default PostPage;
