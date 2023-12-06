import React, { ReactNode } from "react";
import {
  chakra,
  Container,
  Box,
  Stack,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

type IPagination = {
  pagination: {
    skip: number;
    take: number;
    total: number;
    currentPage: number;
  };
  setPagination: (pagination: any) => void;
};

export const CustomPagination = ({
  pagination,
  setPagination,
}: IPagination) => {
  // console.log("pagination", pagination);
  const totalPages = Math.ceil(pagination.total / pagination.take);

  const handlePageChange = (page: number) => {
    setPagination({
      ...pagination,
      skip: (page - 1) * pagination.take,
      currentPage: page,
    });
  };

  return (
    <Stack
      direction={{ base: "column", sm: "row" }}
      as="nav"
      aria-label="Pagination"
      spacing={2}
      w="full"
      justify="center"
      alignItems="center"
      mt={{ base: 3, md: 0 }}
    >
      <Box>
        <PaginationButton
          onClick={() => handlePageChange(pagination.currentPage - 1)}
          isDisabled={pagination.currentPage === 1}
        >
          Previous
        </PaginationButton>
      </Box>
      <Stack direction="row" spacing={2}>
        {[...Array(totalPages)].map((_, index) => (
          <PaginationButton
            key={index}
            isActive={index + 1 === pagination.currentPage}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </PaginationButton>
        ))}
      </Stack>
      <Box>
        <PaginationButton
          onClick={() => handlePageChange(pagination.currentPage + 1)}
          isDisabled={pagination.currentPage === totalPages}
        >
          Next
        </PaginationButton>
      </Box>
    </Stack>
  );
};

interface PaginationButtonProps {
  children: ReactNode;
  isActive?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
}

const PaginationButton = ({
  children,
  isDisabled,
  isActive,
  onClick,
}: PaginationButtonProps) => {
  const activeStyle = {
    bg: useColorModeValue("gray.500", "gray.700"),
    color: "white",
  };

  return (
    <Button
      onClick={onClick}
      py={1}
      px={3}
      border="1px solid"
      borderColor={useColorModeValue("gray.200", "gray.700")}
      rounded="md"
      cursor={isDisabled ? "not-allowed" : "pointer"}
      {...(isActive && activeStyle)}
    >
      {children}
    </Button>
  );
};
