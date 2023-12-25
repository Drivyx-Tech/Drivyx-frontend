import { CategoryRes, TagRes } from "@/services/endpoints/type";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  VStack,
  Checkbox,
  Menu,
  MenuButton,
  MenuList,
  Button,
} from "@chakra-ui/react";

type SelectionsProps = {
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
  categories?: CategoryRes;
  tags?: TagRes;
};

function MarketplaceCustomFilter({
  selectedCategories,
  setSelectedCategories,
  categories,
  tags,
}: SelectionsProps) {
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

  const handleTagChange = (id: string) => {
    if (selectedCategories.tag_ids.includes(id)) {
      setSelectedCategories((prev) => ({
        ...prev,
        tag_ids: prev.tag_ids.filter((item) => item !== id),
      }));
    } else {
      setSelectedCategories((prev) => ({
        ...prev,
        tag_ids: [...prev.tag_ids, id],
      }));
    }
  };

  return (
    <>
      <VStack w={"full"} align="left" mb="18px">
        <Menu flip={false}>
          <MenuButton
            backgroundColor={"transparent"}
            border="1px solid"
            borderColor="gray.200"
            _hover={{ backgroundColor: "transparent" }}
            _active={{ backgroundColor: "transparent" }}
            as={Button}
            rightIcon={<ChevronDownIcon />}
            color={"gray.400"}
            fontWeight={400}
            fontSize={"sm"}
          >
            Category
          </MenuButton>
          <MenuList zIndex={10} w="300px" h="300px" overflowY="auto">
            {categories?.result.detail.categories.map((category) => (
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
        <Menu flip={false}>
          <MenuButton
            backgroundColor={"transparent"}
            border="1px solid"
            borderColor="gray.200"
            _hover={{ backgroundColor: "transparent" }}
            _active={{ backgroundColor: "transparent" }}
            as={Button}
            rightIcon={<ChevronDownIcon />}
            color={"gray.400"}
            fontWeight={400}
            fontSize={"sm"}
          >
            SubCategory
          </MenuButton>
          <MenuList zIndex={10} w="300px" h="300px" overflowY="auto">
            {categories?.result.detail.categories.map((category) => (
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

      <VStack w={"full"} align="left" mb="18px">
        <Menu flip={false}>
          <MenuButton
            backgroundColor={"transparent"}
            border="1px solid"
            borderColor="gray.200"
            _hover={{ backgroundColor: "transparent" }}
            _active={{ backgroundColor: "transparent" }}
            as={Button}
            rightIcon={<ChevronDownIcon />}
            color={"gray.400"}
            fontWeight={400}
            fontSize={"sm"}
          >
            Tag
          </MenuButton>
          <MenuList zIndex={10} w="300px" h="300px" overflowY="auto">
            {tags?.result.detail.tags.map((tag) => (
              <VStack key={tag.id} align="flex-start" spacing={2}>
                <Checkbox
                  isChecked={selectedCategories?.tag_ids.includes(tag.id)}
                  onChange={() => handleTagChange(tag.id)}
                >
                  {tag.tag_name}
                </Checkbox>
              </VStack>
            ))}
          </MenuList>
        </Menu>
      </VStack>
    </>
  );
}

export default MarketplaceCustomFilter;
