import { getCategories } from "@/services/endpoints/category";
import { Category } from "@/services/endpoints/type";
import {
  Box,
  Checkbox,
  Flex,
  Grid,
  GridItem,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export type SelectionsProps = {
  selections: {
    category_id: string;
    subCategory_id: string;
    tag_ids: string[];
  };
  setSelections: any;
};

function CustomMultipleDropdown({
  selections,
  setSelections,
}: SelectionsProps) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>(
    selections.category_id
  );
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>(
    selections.subCategory_id
  );
  const [selectedTags, setSelectedTags] = useState<string[]>(
    selections.tag_ids
  );

  useEffect(() => {
    setSelections({
      category_id: selectedCategory,
      subCategory_id: selectedSubCategory,
      tag_ids: selectedTags,
    });
  }, [selectedCategory, selectedSubCategory, selectedTags, setSelections]);

  useEffect(() => {
    const fetchCategory = async () => {
      const res = await getCategories();
      if (res.result.statusCode !== 200)
        return console.log("error in fetch category");

      setCategories(res.result.detail.categories);
    };

    fetchCategory();
  }, []);

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCategory(event.target.value);
    setSelectedSubCategory(""); // Reset subcategory when category changes
    setSelectedTags([]); // Reset tags when category changes
  };

  const handleSubCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedSubCategory(event.target.value);
  };

  return (
    <Grid
      templateAreas={`"cate subcate"
    "tag tag"`}
      templateColumns="repeat(2, 1fr)"
      gap={6}
      w={"100%"}
    >
      <GridItem area={"cate"}>
        <Flex align="center" mb="18px">
          <Text
            fontSize="md"
            color={"gray.700"}
            fontWeight="bold"
            me="10px"
            minW={"120px"}
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
      </GridItem>
      <GridItem area={"subcate"}>
        <Flex align="center" justify={"center"} mb="18px">
          <Text
            fontSize="md"
            color={"gray.700"}
            fontWeight="bold"
            me="10px"
            minW={"120px"}
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
      </GridItem>

      <GridItem area={"tag"}>
        <Flex align="left" justify={"left"} mb="18px">
          <Text
            fontSize="md"
            color={"gray.700"}
            fontWeight="bold"
            me="10px"
            minW={"120px"}
          >
            Tags:
          </Text>

          <Stack spacing={5} direction="row">
            {categories
              .find((category) => category.id === selectedCategory)
              ?.tags.map((tag) => (
                <Checkbox
                  key={tag.id}
                  value={tag.id}
                  colorScheme="green"
                  onChange={() => {
                    setSelectedTags((prev) => {
                      if (prev.includes(tag.id)) {
                        return prev.filter((id) => id !== tag.id);
                      } else {
                        return [...prev, tag.id];
                      }
                    });
                  }}
                >
                  {tag.tag_name}
                </Checkbox>
              ))}
          </Stack>
        </Flex>
      </GridItem>
    </Grid>
  );
}

export default CustomMultipleDropdown;
