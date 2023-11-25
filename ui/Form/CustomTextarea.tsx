import { Flex, Text, Textarea, VStack } from "@chakra-ui/react";
import React from "react";

type CustomTextareaProps = {
  id: string;
  title: string;
  placeholder: string;
  isReadOnly?: boolean;
  onChange: any;
  value: string;
  style?: any;
};

function CustomTextarea({
  id,
  title,
  placeholder,
  onChange,
  value,
  isReadOnly,
}: CustomTextareaProps) {
  return (
    <VStack align="top" mb="18px">
      <Text
        fontSize="md"
        color={"gray.700"}
        fontWeight="bold"
        me="10px"
        w={"fit-content"}
        flex={"1"}
        mt={2}
      >
        {title}
      </Text>
      <Textarea
        id={id}
        name={id}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        isReadOnly={isReadOnly}
        variant={isReadOnly ? "outline" : "filled"}
        h={"180px"}
        px={4}
      />
    </VStack>
  );
}

export default CustomTextarea;
