import {
  Flex,
  FormControl,
  FormLabel,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React from "react";

type CustomTextareaProps = {
  id: string;
  title: string;
  placeholder: string;
  isReadOnly?: boolean;
  onChange: any;
  value: string;
  style?: any;
  isRequired?: boolean;
};

function CustomTextarea({
  id,
  title,
  placeholder,
  onChange,
  value,
  isReadOnly,
  isRequired = true,
}: CustomTextareaProps) {
  return (
    <VStack spacing={5} mb="18px" w={"full"}>
      <FormControl isRequired={isRequired}>
        <FormLabel>{title}</FormLabel>
        <Textarea
          id={id}
          name={id}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          isReadOnly={isReadOnly}
          focusBorderColor={isReadOnly ? "gray.300" : "blue.500"}
          h={"100px"}
          px={4}
        />
      </FormControl>
    </VStack>
  );
}

export default CustomTextarea;
