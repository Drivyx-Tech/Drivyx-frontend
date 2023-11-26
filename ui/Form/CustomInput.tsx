import { Flex, Text, Input } from "@chakra-ui/react";
import React from "react";

type CustomInputProps = {
  id: string;
  title: string;
  placeholder: string;
  isReadOnly?: boolean;
  onChange: any;
  value: string;
  style?: any;
};

function CustomInput({
  id,
  title,
  placeholder,
  onChange,
  isReadOnly,
  value,
  style,
}: CustomInputProps) {
  return (
    <Flex align="center" mb="18px">
      <Text
        fontSize="md"
        color={"gray.700"}
        fontWeight="bold"
        me="10px"
        textStyle={"subheading"}
        minW={"120px"}
      >
        {title}
      </Text>
      <Input
        id={id}
        name={id}
        isReadOnly={isReadOnly}
        variant={isReadOnly ? "unstyled" : "filled"}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        h={"40px"}
        w={"100%"}
        px={4}
        style={{ ...style }}
      />
    </Flex>
  );
}

export default CustomInput;
