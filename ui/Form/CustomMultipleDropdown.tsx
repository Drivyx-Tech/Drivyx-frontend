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
    category: {
      category_id: string;
      category_name?: string;
    };
    subCategory: {
      subCategory_id: string;
      subCategory_name?: string;
    };
    tags: {
      tag_id: string;
      tag_name?: string;
    }[];
  };
  setSelections: React.Dispatch<
    React.SetStateAction<{
      category: {
        category_id: string;
        category_name?: string;
      };
      subCategory: {
        subCategory_id: string;
        subCategory_name?: string;
      };
      tags: {
        tag_id: string;
        tag_name?: string;
      }[];
    }>
  >;
};

function CustomMultipleDropdown({
  selections,
  setSelections,
}: SelectionsProps) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState({
    category_name: selections.category?.category_name,
    category_id: selections.category?.category_id,
  });
  const [selectedSubCategory, setSelectedSubCategory] = useState({
    subCategory_id: selections.subCategory?.subCategory_id,
    subCategory_name: selections.subCategory?.subCategory_name,
  });
  const [selectedTags, setSelectedTags] = useState(
    selections.tags?.map((tag) => {
      return {
        tag_id: tag.tag_id,
        tag_name: tag.tag_name,
      };
    })
  );

  useEffect(() => {
    setSelections({
      category: selectedCategory,
      subCategory: selectedSubCategory,
      tags: selectedTags,
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
    console.log(
      "check-----",
      event.target.value,
      event.target.selectedOptions[0].id
    );
    setSelectedCategory({
      category_id: event.target.value,
      category_name: event.target.selectedOptions[0].id,
    });
    setSelectedSubCategory({
      subCategory_id: "",
      subCategory_name: "",
    }); // Reset subcategory when category changes
    setSelectedTags([]); // Reset tags when category changes
  };

  const handleSubCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedSubCategory({
      subCategory_id: event.target.value,
      subCategory_name: event.target.selectedOptions[0].id,
    });
  };

  return (
    <VStack>
      <Grid templateRows="repeat(2, 1fr)" w={"100%"}>
        <FormControl isRequired={true} mb={4}>
          <FormLabel>Category:</FormLabel>
          <Select
            id="category"
            name="category"
            value={selectedCategory.category_id}
            onChange={handleCategoryChange}
            placeholder="---"
          >
            {categories.map((category: any) => (
              <option
                key={category.id}
                id={category.category_name}
                value={category.id}
              >
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
            value={selectedSubCategory.subCategory_id}
            onChange={handleSubCategoryChange}
            placeholder="---"
          >
            {categories
              .find((category) => category.id === selectedCategory.category_id)
              ?.subCategories.map(({ subCategory }) => (
                <option
                  key={subCategory.id}
                  id={subCategory.subCategory_name}
                  value={subCategory.id}
                >
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
            .find((category) => category.id === selectedCategory.category_id)
            ?.tags.map((tag) => (
              <Checkbox
                key={tag.id}
                id={tag.tag_name}
                value={tag.id}
                colorScheme="green"
                onChange={(event) => {
                  if (event.target.checked) {
                    setSelectedTags([
                      ...selectedTags,
                      { tag_id: tag.id, tag_name: tag.tag_name },
                    ]);
                  } else {
                    setSelectedTags(
                      selectedTags.filter((t) => t.tag_id !== tag.id)
                    );
                  }
                  console.log(selectedTags);
                }}
                isChecked={selectedTags.some((t) => t.tag_id === tag.id)}
              >
                {tag.tag_name}
              </Checkbox>
            ))}
        </Stack>
      </FormControl>
    </VStack>
  );
}

export default CustomMultipleDropdown;
