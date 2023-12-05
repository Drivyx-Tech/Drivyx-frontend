import {
  Stack,
  Select,
  FormControl,
  VStack,
  FormLabel,
} from "@chakra-ui/react";
import React from "react";

type CustomSelectionProps = {
  id: string;
  title: string;
  placeholder: string;
  onChange: any;
  value: string;
  optionItems: any[];
  isRequired?: boolean;
};

function CustomSelection({
  id,
  title,
  placeholder,
  onChange,
  value,
  optionItems,
  isRequired = true,
}: CustomSelectionProps) {
  return (
    <VStack spacing={5} mb="18px">
      <FormControl isRequired={isRequired}>
        <FormLabel>{title}</FormLabel>
        <Stack flex={"2"}>
          <Select
            id={id}
            name={id}
            focusBorderColor={"blue.500"}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            h={"40px"}
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
      </FormControl>
    </VStack>
  );
}

export default CustomSelection;
