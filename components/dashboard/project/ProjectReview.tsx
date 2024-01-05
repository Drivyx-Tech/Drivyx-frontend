import { IStep } from "@/app/(site)/(dashboard)/dashboard/project/page";
import React, { useState } from "react";
import {
  Button,
  Flex,
  Spinner,
  Text,
  Image,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  HStack,
  VStack,
  TableContainer,
  Stack,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useAppDispatch, useAppSlector } from "@/services/redux/hooks";
import { createProject } from "@/services/endpoints/project";
import { tmpStoreAction } from "@/services/redux/tmpStore.reducer";

function ProjectReview({ step, setStep, isLoading, setIsLoading }: IStep) {
  const dispatch = useAppDispatch();
  const project = useAppSlector((state) => state.tmpStore.project);

  const handleSubmit = async () => {
    try {
      setIsLoading(true);

      const payload = {
        category_id: project.category?.category_id,
        subCategory_id: project.subCategory?.subCategory_id,
        tag_ids: project.tags?.map((tag) => tag.tag_id),
        project: {
          project_name: project.project_name,
          funding_goal: project.funding_goal,
          excerpt: project.excerpt,
          project_goal: project.project_goal,
          desc: project.desc,
          outcome: project.outcome,
          contributions: project.contributions,
        },
        coverFile: project.coverFile,
        imageFiles: project.imageFiles,
      };

      const res = await createProject(payload);

      if (res.result.statusCode === 200) {
        // only clear state for project
        dispatch(tmpStoreAction.clearProject());
        setIsLoading(false);

        setStep(step + 1);
      }
    } catch (error) {
      setIsLoading(false);
      console.log("check error ---", error);
    }
  };

  if (isLoading) {
    return (
      <Flex justifyContent="center" alignItems="center" h="100%" w="100%">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Flex>
    );
  }

  return (
    <Stack
      flexWrap={"wrap"}
      w={"7xl"}
      mb={4}
      bgColor={"white"}
      px={20}
      py={16}
      rounded={5}
      shadow="0px 2px 5.5px rgba(0, 0, 0, 0.02)"
    >
      <TableContainer flexWrap={"wrap"} overflow={"hidden"}>
        <Table width={"full"} variant="simple" flexWrap={"wrap"}>
          <Thead>
            <Tr>
              <Th fontSize={"lg"}>Title</Th>
              <Th fontSize={"lg"}>into</Th>
            </Tr>
          </Thead>
          <Tbody width={"900px"} flexWrap={"wrap"}>
            <Tr>
              <Td>
                <Text fontWeight={"bold"}>Project name</Text>
              </Td>
              <Td whiteSpace="normal">
                <Text>{project.project_name}</Text>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Text fontWeight={"bold"}>Funding goal</Text>
              </Td>
              <Td whiteSpace="normal">
                <Text>{project.funding_goal}</Text>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Text fontWeight={"bold"}>Excerpt</Text>
              </Td>
              <Td>
                <Text whiteSpace="normal">{project.excerpt}</Text>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Text fontWeight={"bold"}>Category</Text>
              </Td>
              <Td>
                <Text whiteSpace="normal">
                  {project.category.category_name}
                </Text>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Text fontWeight={"bold"}>Subcategory</Text>
              </Td>
              <Td>
                <Text whiteSpace="normal">
                  {project.subCategory.subCategory_name}
                </Text>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Text fontWeight={"bold"}>Tags</Text>
              </Td>
              <Td whiteSpace="normal">
                {project.tags.map((tag, index) => {
                  return <Text key={index}>{tag.tag_name}</Text>;
                })}
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Text fontWeight={"bold"}>Project description</Text>
              </Td>
              <Td whiteSpace="normal">
                <Text flexWrap={"wrap"}>{project.desc}</Text>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Text fontWeight={"bold"}>Project goals</Text>
              </Td>
              <Td>
                <Text whiteSpace="normal">{project.project_goal}</Text>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Text fontWeight={"bold"}>Expected outcomes</Text>
              </Td>
              <Td>
                <Text whiteSpace="normal">{project.outcome}</Text>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Text fontWeight={"bold"}>Contributions</Text>
              </Td>
              <Td>
                <Text whiteSpace="normal">{project.contributions}</Text>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Text fontWeight={"bold"}>Cover image</Text>
              </Td>
              <Td whiteSpace="normal">
                {project.coverFile?.base64 && (
                  <Image
                    h={"180px"}
                    src={project.coverFile?.base64}
                    alt={"project cover image"}
                  />
                )}
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Text fontWeight={"bold"}>Project image gallery</Text>
              </Td>
              <Td whiteSpace="normal">
                <HStack flexWrap={"wrap"} gap={6}>
                  {project.imageFiles?.map((file, index) => (
                    <Image
                      key={index}
                      h={"100px"}
                      src={file?.base64}
                      alt={"project galary image"}
                    />
                  ))}
                </HStack>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>

      <Flex justify="center" gap={4}>
        <Button
          color={"white"}
          bg="secondary.500"
          border="1px solid gray.200"
          cursor="pointer"
          transition={"all .3s ease"}
          _hover={{
            bg: "secondary.600",
          }}
          leftIcon={<ChevronLeftIcon />}
          size={"sm"}
          fontSize={"12px"}
          fontWeight={"400"}
          onClick={() => {
            setStep(step - 1);
          }}
        >
          Back
        </Button>
        {/* <Button
          color={"white"}
          bg="secondary.500"
          border="1px solid gray.200"
          cursor="pointer"
          transition={"all .3s ease"}
          _hover={{
            bg: "secondary.600",
          }}
          size={"sm"}
          fontSize={"12px"}
          fontWeight={"400"}
          onClick={() => {}}
          isDisabled={true}
        >
          Save as Draft
        </Button> */}
        <Button
          color={"white"}
          bg="secondary.500"
          border="1px solid gray.200"
          cursor="pointer"
          transition={"all .3s ease"}
          _hover={{
            bg: "secondary.600",
          }}
          size={"sm"}
          fontSize={"12px"}
          fontWeight={"400"}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Flex>
    </Stack>
  );
}

export default ProjectReview;
