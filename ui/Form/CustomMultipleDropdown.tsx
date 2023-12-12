import { getCategories } from "@/services/endpoints/category";
import { Category } from "@/services/endpoints/type";
import {
  Checkbox,
  FormControl,
  FormLabel,
  Grid,
  Select,
  Stack,
  Text,
  VStack,
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
    <VStack>
      <Grid templateRows="repeat(2, 1fr)" w={"100%"}>
        <FormControl isRequired={true} mb={4}>
          <FormLabel>Category:</FormLabel>
          <Select
            id="category"
            name="category"
            value={selectedCategory}
            onChange={handleCategoryChange}
            placeholder="---"
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                <Text fontSize={"sm"}>{category.category_name}</Text>
              </option>
            ))}
          </Select>
        </FormControl>

        <FormControl isRequired={true} mb={4}>
          <FormLabel>SubCategory:</FormLabel>
          <Select
            id="subCategory"
            name="subCategory"
            value={selectedSubCategory}
            onChange={handleSubCategoryChange}
            placeholder="---"
          >
            {categories
              .find((category) => category.id === selectedCategory)
              ?.subCategories.map((subCategory) => (
                <option key={subCategory.id} value={subCategory.id}>
                  {subCategory.subCategory_name}
                </option>
              ))}
          </Select>
        </FormControl>
      </Grid>

      <FormControl mb={4} minH={"130px"}>
        <FormLabel>Tag:</FormLabel>
        <Stack spacing={3} direction="row" flexWrap={"wrap"}>
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
                <Text fontSize={"15px"}>{tag.tag_name}</Text>
              </Checkbox>
            ))}
        </Stack>
      </FormControl>
    </VStack>
  );
}

export default CustomMultipleDropdown;
