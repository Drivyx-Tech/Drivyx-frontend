"use client";

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { BsPerson } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { useFormik } from "formik";
import { createVisitorQuery } from "@/services/endpoints/visitorQuery";
import { IoIosSend } from "react-icons/io";

function ContactForm() {
  const toast = useToast();
  const formik = useFormik({
    initialValues: {
      email: "",
      phone: "",
      given_name: "",
      family_name: "",
      message: "",
    },
    onSubmit: async (values) => {
      try {
        const res = await createVisitorQuery({ ...values });
        if (res.result.statusCode === 200) {
          toast({
            title: "Success",
            description: "Your message has been sent successfully",
            status: "success",
            duration: 3000,
            isClosable: true,
          });

          formik.resetForm();
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <Flex align="center" justify="center" flex={1} w={"full"} maxW={"2xl"}>
      <Box
        minW={{ base: "90%", md: "80%" }}
        borderRadius="lg"
        p={8}
        shadow="xl"
        bg="white"
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            formik.handleSubmit();
          }}
        >
          <VStack spacing={5}>
            <HStack w={"full"} spacing={5}>
              <FormControl isRequired>
                <FormLabel fontSize={"sm"} fontWeight={"600"}>
                  First Name
                </FormLabel>

                <InputGroup size={"sm"}>
                  <InputLeftElement>
                    <BsPerson />
                  </InputLeftElement>
                  <Input
                    id="given_name"
                    type="text"
                    name="given_name"
                    placeholder="given name"
                    onChange={formik.handleChange}
                    value={formik.values.given_name}
                  />
                </InputGroup>
              </FormControl>

              <FormControl isRequired>
                <FormLabel fontSize={"sm"} fontWeight={"600"}>
                  Last Name
                </FormLabel>

                <InputGroup size={"sm"}>
                  <InputLeftElement>
                    <BsPerson />
                  </InputLeftElement>
                  <Input
                    id="family_name"
                    type="text"
                    name="family_name"
                    placeholder="family name"
                    onChange={formik.handleChange}
                    value={formik.values.family_name}
                  />
                </InputGroup>
              </FormControl>
            </HStack>

            <FormControl isRequired>
              <FormLabel fontSize={"sm"} fontWeight={"600"}>
                Email
              </FormLabel>

              <InputGroup size={"sm"}>
                <InputLeftElement>
                  <MdOutlineEmail />
                </InputLeftElement>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="email"
                  fontSize={"sm"}
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
              </InputGroup>
            </FormControl>

            <FormControl isRequired>
              <FormLabel fontSize={"sm"} fontWeight={"600"}>
                Message
              </FormLabel>

              <Textarea
                size={"sm"}
                id="message"
                name="message"
                placeholder="message"
                rows={6}
                resize="none"
                onChange={formik.handleChange}
                value={formik.values.message}
              />
            </FormControl>

            <Button
              rounded={"reset"}
              type={"submit"}
              bg="tertiary.300"
              color="secondary.800"
              _hover={{
                bg: "tertiary.500",
              }}
              width="full"
              leftIcon={<IoIosSend />}
            >
              Send Message
            </Button>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
}

export default ContactForm;
