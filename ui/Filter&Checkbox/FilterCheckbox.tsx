import {
  Checkbox,
  Menu,
  MenuButton,
  MenuGroup,
  MenuList,
  HStack,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { IoFilter } from "react-icons/io5";
import { FilterProps } from "./PublicCustomFilter";
import { RxReset } from "react-icons/rx";

function FilterCheckbox({
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
    <Menu closeOnSelect={false}>
      <MenuButton rounded={"full"} cursor={"pointer"}>
        <HStack>
          <HStack
            w={"30px"}
            h={"30px"}
            alignItems={"center"}
            justifyContent={"center"}
            rounded={"full"}
          >
            <IoFilter size={20} color={"secondary.800"} />
          </HStack>
        </HStack>
      </MenuButton>
      <HStack
        w={"30px"}
        h={"40px"}
        rounded={"full"}
        cursor={"pointer"}
        onClick={() =>
          setSelectedCategories({
            category_id: [],
            subCategory_id: [],
            tag_ids: [],
          })
        }
      >
        <RxReset size={20} color={"secondary.800"} />
      </HStack>
      <MenuList minWidth="200px" h={"300px"} overflow={"auto"}>
        {categories.map((category, index) => (
          <MenuGroup key={index} title={category.category_name}>
            <VStack w={"full"}>
              {category.subCategories.map((subCategory, index) => (
                <Checkbox
                  w={"full"}
                  key={index}
                  size="sm"
                  px={6}
                  colorScheme="green"
                  onChange={() =>
                    handleCategoryChange(subCategory.subCategory.id)
                  }
                >
                  {subCategory.subCategory?.subCategory_name} (
                  {subCategory.count})
                </Checkbox>
              ))}
            </VStack>
          </MenuGroup>
        ))}
      </MenuList>
    </Menu>
  );
}

export default FilterCheckbox;
