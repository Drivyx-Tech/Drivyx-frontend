import { getCategories } from "@/services/endpoints/category";
import { Category } from "@/services/endpoints/type";
import { Box, Flex, Grid, Select, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

// interface Category {
//   id: string;
//   category_name: string;
//   subCategories: SubCategory[];
// }

// interface SubCategory {
//   id: string;
//   subCategory_name: string;
// }

// interface DropdownsProps {
//   categories: Category[];
// }

function CustomMultipleDropdown() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategory = async () => {
      const res = await getCategories();
      if (res.result.statusCode !== 200)
        return console.log("error in fetch category");

      setCategories(res.result.detail.categories);
    };

    fetchCategory();
  }, []);

  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>("");

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCategory(event.target.value);
    setSelectedSubCategory(""); // Reset subcategory when category changes
  };

  const handleSubCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedSubCategory(event.target.value);
  };

  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={6} w={"100%"}>
      <Flex align="center" mb="18px">
        <Text
          fontSize="md"
          color={"gray.700"}
          fontWeight="bold"
          me="10px"
          w={"150px"}
          flex={"1"}
        >
          Category:
        </Text>
        <Select
          id="category"
          name="category"
          variant={"filled"}
          value={selectedCategory}
          onChange={handleCategoryChange}
          placeholder="Select a category"
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.category_name}
            </option>
          ))}
        </Select>
      </Flex>

      <Flex align="center" justify={"center"} mb="18px">
        <Text
          fontSize="md"
          color={"gray.700"}
          fontWeight="bold"
          me="10px"
          w={"150px"}
          flex={"1"}
        >
          SubCategory:
        </Text>

        <Select
          id="subCategory"
          name="subCategory"
          variant={"filled"}
          value={selectedSubCategory}
          onChange={handleSubCategoryChange}
          placeholder="Select a subcategory"
        >
          {categories
            .find((category) => category.id === selectedCategory)
            ?.subCategories.map((subCategory) => (
              <option key={subCategory.id} value={subCategory.id}>
                {subCategory.subCategory_name}
              </option>
            ))}
        </Select>
      </Flex>
    </Grid>
  );
}

export default CustomMultipleDropdown;
