import {
  Flex,
  Text,
  Input,
  FormControl,
  FormLabel,
  VStack,
} from "@chakra-ui/react";
import React from "react";

type CustomInputProps = {
  id: string;
  title: string;
  placeholder: string;
  isReadOnly?: boolean;
  onChange: any;
  value: string;
  style?: any;
  isRequired?: boolean;
};

function CustomInput({
  id,
  title,
  placeholder,
  onChange,
  isReadOnly,
  value,
  style,
  isRequired = true,
}: CustomInputProps) {
  return (
    <VStack spacing={5} mb="18px">
      <FormControl isRequired={isRequired}>
        <FormLabel>{title}</FormLabel>
        <Input
          id={id}
          name={id}
          isReadOnly={isReadOnly}
          // variant={isReadOnly ? "outline" : "filled"}
          focusBorderColor={isReadOnly ? "gray.300" : "blue.500"}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          h={"40px"}
          w={"100%"}
          px={4}
          style={{ ...style }}
        />
      </FormControl>
    </VStack>
  );
}

export default CustomInput;
