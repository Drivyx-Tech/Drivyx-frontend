import { IStep } from "@/app/(site)/(dashboard)/dashboard/project/page";
import React from "react";
import {
  Button,
  Flex,
  FormControl,
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

function ProjectReview({ step, setStep, setProgress }: IStep) {
  const dispatch = useAppDispatch();
  const project = useAppSlector((state) => state.tmpStore.project);

  return (
    <div>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>Title</Th>
              <Th>into</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              {
                <Td>
                  <Text>{project["project_name"]}</Text>
                </Td>
              }
            </Tr>
            <Tr>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
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
          onClick={() => {}}
        >
          Submit
        </Button>
      </Flex>
    </div>
  );
}

export default ProjectReview;
