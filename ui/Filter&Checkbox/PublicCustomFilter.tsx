import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
  Checkbox,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { Category } from "@/services/endpoints/type";

export type FilterProps = {
  categories: Category[];
  selectedCategories: {
    category_id: string[];
    subCategory_id: string[];
    tag_ids: string[];
  };
  setSelectedCategories: React.Dispatch<
    React.SetStateAction<{
      category_id: string[];
      subCategory_id: string[];
      tag_ids: string[];
    }>
  >;
};

function PublicCustomFilter({
  categories,
  selectedCategories,
  setSelectedCategories,
}: FilterProps) {
  const handleCategoryChange = (id: string) => {
    if (selectedCategories.subCategory_id.includes(id)) {
      setSelectedCategories((prev) => ({
        ...prev,
        subCategory_id: prev.subCategory_id.filter((item) => item !== id),
      }));
    } else {
      setSelectedCategories((prev) => ({
        ...prev,
        subCategory_id: [...prev.subCategory_id, id],
      }));
    }
  };

  return (
    <Accordion allowMultiple defaultIndex={[0]}>
      {categories.map((category, index) => (
        <AccordionItem key={index} w={"full"}>
          <AccordionButton
            w={"full"}
            textColor="secondary.800"
            _expanded={{
              fontWeight: "600",
            }}
            px={0}
          >
            <Box as="span" flex="1" textAlign="left">
              <Text textColor={"secondary.800"} fontSize="sm">
                {category.category_name}
              </Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            {category.subCategories.map(({ subCategory, count }, index) => (
              <AccordionPanel key={index} pb={2} px={0}>
                <Checkbox
                  // w="175px"
                  display={"flex"}
                  flexDir={"row"}
                  textColor="secondary.800"
                  isChecked={selectedCategories.subCategory_id.includes(
                    subCategory.id
                  )}
                  onChange={() => handleCategoryChange(subCategory.id)}
                >
                  <HStack w="175px">
                    <Text w="175px" textColor={"secondary.800"} fontSize="12px">
                      {subCategory.subCategory_name} ({count})
                    </Text>
                  </HStack>
                </Checkbox>
              </AccordionPanel>
            ))}
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default PublicCustomFilter;
