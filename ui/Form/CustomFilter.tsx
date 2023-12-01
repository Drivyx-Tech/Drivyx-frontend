import CategoryCheckbox from "@/components/marketplace/CategoryCheckbox";
import TagCheckbox from "@/components/marketplace/TagCheckbox";
import { getCategories } from "@/services/endpoints/category";
import { Category } from "@/services/endpoints/type";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Flex,
  Input,
  VStack,
  Text,
  Checkbox,
  Menu,
  MenuButton,
  MenuList,
  Button,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

type SelectionsProps = {
  selectedCategories: {
    category_id: string[];
    subCategory_id: string[];
  };
  setSelectedCategories: React.Dispatch<
    React.SetStateAction<{
      category_id: string[];
      subCategory_id: string[];
    }>
  >;
};

function CustomFilter({
  selectedCategories,
  setSelectedCategories,
}: SelectionsProps) {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await getCategories();
        if (res.result.statusCode === 200) {
          setCategories(res.result.detail.categories);
        } else {
          console.error("Error in fetching categories");
        }
      } catch (error) {
        console.error("Error in fetching categories", error);
      }
    };

    fetchCategory();
  }, []);

  const handleCategoryChange = (id: string) => {
    if (selectedCategories.category_id.includes(id)) {
      setSelectedCategories((prev) => ({
        ...prev,
        category_id: prev.category_id.filter((item) => item !== id),
      }));
    } else {
      setSelectedCategories((prev) => ({
        ...prev,
        category_id: [...prev.category_id, id],
      }));
    }

    setSelectedCategories((prev) => ({
      ...prev,
      subCategory_id: [],
    }));
  };

  const handleSubCategoryChange = (id: string) => {
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
    <>
      <VStack w={"full"} align="left" mb="18px">
        <Text fontSize="sm">Filter by category:</Text>
        <Menu flip={false}>
          <MenuButton
            backgroundColor={"transparent"}
            border="1px solid"
            borderColor="gray.200"
            _hover={{ backgroundColor: "transparent" }}
            _active={{ backgroundColor: "transparent" }}
            as={Button}
            rightIcon={<ChevronDownIcon />}
            color={"gray.500"}
          >
            Category
          </MenuButton>
          <MenuList zIndex={10} w="300px" h="300px" overflowY="auto">
            {categories.map((category) => (
              <VStack key={category.id} align="flex-start" spacing={2}>
                <Checkbox
                  isChecked={selectedCategories?.category_id.includes(
                    category.id
                  )}
                  onChange={() => handleCategoryChange(category.id)}
                >
                  {category.category_name}
                </Checkbox>
              </VStack>
            ))}
          </MenuList>
        </Menu>
      </VStack>

      <VStack w={"full"} align="left" mb="18px">
        <Text fontSize="sm">Filter by sub category:</Text>
        <Menu flip={false}>
          <MenuButton
            backgroundColor={"transparent"}
            border="1px solid"
            borderColor="gray.200"
            _hover={{ backgroundColor: "transparent" }}
            _active={{ backgroundColor: "transparent" }}
            as={Button}
            rightIcon={<ChevronDownIcon />}
            color={"gray.500"}
          >
            SubCategory
          </MenuButton>
          <MenuList zIndex={10} w="300px" h="300px" overflowY="auto">
            {categories.map((category) => (
              <VStack key={category.id} align="flex-start" spacing={2}>
                <VStack pl={6} align="flex-start" spacing={2}>
                  {category.subCategories?.map((subCategory) => (
                    <Checkbox
                      key={subCategory.id}
                      isChecked={selectedCategories?.subCategory_id.includes(
                        subCategory.id
                      )}
                      onChange={() => handleSubCategoryChange(subCategory.id)}
                    >
                      {subCategory.subCategory_name}
                    </Checkbox>
                  ))}
                </VStack>
              </VStack>
            ))}
          </MenuList>
        </Menu>
      </VStack>
    </>
  );
}

export default CustomFilter;
