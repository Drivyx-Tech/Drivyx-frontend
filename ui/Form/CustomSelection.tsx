import { Flex, Text, Stack, Select } from "@chakra-ui/react";
import React from "react";

type CustomSelectionProps = {
  id: string;
  title: string;
  placeholder: string;
  isReadOnly: boolean;
  onChange: any;
  value: string;
  optionItems: any[];
};

function CustomSelection({
  id,
  title,
  placeholder,
  onChange,
  isReadOnly,
  value,
  optionItems,
}: CustomSelectionProps) {
  return (
    <Flex align="center" mb="18px">
      <Text
        fontSize="md"
        color={"gray.700"}
        fontWeight="bold"
        me="10px"
        w={"150px"}
        flex={"1"}
      >
        {title}
      </Text>
      <Stack flex={"2"}>
        <Select
          id={id}
          name={id}
          isDisabled={isReadOnly}
          variant={isReadOnly ? "unstyled" : "filled"}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          h={"40px"}
          // px={4}
        >
          {optionItems.map((item, index) => {
            return (
              <option key={index} value={item.id}>
                {item.name}
              </option>
            );
          })}
        </Select>
      </Stack>
    </Flex>
  );
}

export default CustomSelection;
