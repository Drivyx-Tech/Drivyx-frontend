import { Category } from "@/types/category";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Text,
  VStack,
  Checkbox,
  Menu,
  MenuButton,
  MenuList,
  Button,
} from "@chakra-ui/react";

const CategoryCheckbox = ({
  categories,
  selectedCategories,
  setSelectedCategories,
}: {
  categories: Category[];
  selectedCategories: string[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  // const handleCategoryChange = (categoryId: string) => {
  //   setSelectedCategories((prevSelectedCategories) => {
  //     if (prevSelectedCategories.includes(categoryId)) {
  //       // Category is already selected, remove it and its subcategories
  //       const category = categories.find((cat) => cat._id === categoryId);
  //       const subCategoryIds =
  //         category?.subCategory.map((subCat) => subCat._id) || [];
  //       return prevSelectedCategories.filter(
  //         (id) => id !== categoryId && !subCategoryIds.includes(id)
  //       );
  //     } else {
  //       // Category is not selected, add it and its subcategories
  //       const category = categories.find((cat) => cat._id === categoryId);
  //       const subCategoryIds =
  //         category?.subCategory.map((subCat) => subCat._id) || [];
  //       return [...prevSelectedCategories, categoryId, ...subCategoryIds];
  //     }
  //   });
  // };

  const handleSubCategoryChange = (subCategoryId: string) => {
    setSelectedCategories((prevSelectedCategories) => {
      if (prevSelectedCategories.includes(subCategoryId)) {
        // Subcategory is already selected, remove it
        return prevSelectedCategories.filter((id) => id !== subCategoryId);
      } else {
        // Subcategory is not selected, add it
        return [...prevSelectedCategories, subCategoryId];
      }
    });
  };

  return (
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
        w={"300px"}
      >
        Category
      </MenuButton>
      <MenuList zIndex={10} w="300px" h="300px" overflowY="auto">
        {categories.map((category) => (
          <VStack key={category._id} align="flex-start" spacing={2}>
            <Checkbox
              isChecked={selectedCategories.includes(category._id)}
              onChange={() => handleSubCategoryChange(category._id)}
            >
              {category.subCategory}
            </Checkbox>
            {/* <VStack pl={6} align="flex-start" spacing={2}>
              {category.category.map((subCategory) => (
                <Checkbox
                  key={subCategory._id}
                  isChecked={selectedCategories.includes(subCategory._id)}
                  onChange={() => handleSubCategoryChange(subCategory._id)}
                >
                  {subCategory.subCategory}
                </Checkbox>
              ))}
            </VStack> */}
          </VStack>
        ))}
      </MenuList>
    </Menu>
  );
};

export default CategoryCheckbox;
