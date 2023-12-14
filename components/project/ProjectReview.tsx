import { IStep } from "@/app/(site)/(dashboard)/dashboard/project/page";
import React, { useState } from "react";
import {
  Button,
  Flex,
  Spinner,
  FormLabel,
  Icon,
  Input,
  Text,
  VStack,
  Image,
  Stack,
  HStack,
  Link,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useAppDispatch, useAppSlector } from "@/services/redux/hooks";
import { createProject } from "@/services/endpoints/project";
import { tmpStoreAction } from "@/services/redux/tmpStore.reducer";

function ProjectReview({ step, setStep, setProgress }: IStep) {
  const dispatch = useAppDispatch();
  const project = useAppSlector((state) => state.tmpStore.project);
  const [isLoading, setIsLoading] = useState(false);
  console.log("check redux project -----", project);

  // render a loading spinner when isLoading is true
  if (isLoading) {
    return (
      <Flex
        justifyContent="center"
        alignItems="center"
        h="100%"
        w="100%"
        // bg="rgba(0, 0, 0, 0.5)"
      >
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
        dispatch(tmpStoreAction.clearState());
        setIsLoading(false);

        setStep(step + 1);
        setProgress(100);
      }
    } catch (error) {
      setIsLoading(false);
      console.log("check error ---", error);
    }
  };

  return (
    <div>
      <TableContainer>
        <Text
          w={"100%"}
          fontSize="xl"
          color={"gray.700"}
          fontWeight="bold"
          mb={6}
          pl={6}
        >
          Create a New Project - review and confirm to submit
        </Text>
        <Table variant="simple">
          {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
          <Thead>
            <Tr>
              <Th>Title</Th>
              <Th>into</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>
                <Text>Project name</Text>
              </Td>
              <Td>
                <Text>{project.project_name}</Text>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Text>Funding goal</Text>
              </Td>
              <Td>
                <Text>{project.funding_goal}</Text>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Text>Excerpt</Text>
              </Td>
              <Td>
                <Text>{project.excerpt}</Text>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Text>Category</Text>
              </Td>
              <Td>
                <Text>{project.category.category_name}</Text>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Text>Subcategory</Text>
              </Td>
              <Td>
                <Text>{project.subCategory.subCategory_name}</Text>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Text>Tags</Text>
              </Td>
              <Td>
                {project.tags.map((tag, index) => {
                  return <Text key={index}>{tag.tag_name}</Text>;
                })}
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Text>Project description</Text>
              </Td>
              <Td>
                <Text>{project.desc}</Text>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Text>Project goals</Text>
              </Td>
              <Td>
                <Text>{project.project_goal}</Text>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Text>Expected outcomes</Text>
              </Td>
              <Td>
                <Text>{project.outcome}</Text>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Text>Contributions</Text>
              </Td>
              <Td>
                <Text>{project.contributions}</Text>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Text>Project cover image</Text>
              </Td>
              <Td>
                <Image
                  h={"180px"}
                  src={project.coverFile?.base64}
                  alt={"project cover image"}
                />
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Text>Project galary</Text>
              </Td>
              <Td>
                {project.imageFiles?.map((file, index) => (
                  <Image
                    key={index}
                    h={"100px"}
                    src={file?.base64}
                    alt={"project galary image"}
                  />
                ))}
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>

      <Flex justify="center" mx={10} mb={10} gap={4}>
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
            setProgress(50);
          }}
        >
          Back
        </Button>
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
          onClick={() => {}}
          isDisabled={true}
        >
          Save as Draft
        </Button>
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
    </div>
  );
}

export default ProjectReview;
