import { Tag } from "@/types/tag";
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

const TagCheckbox = ({
  tags,
  selectedTags,
  setSelectedTags,
}: {
  tags: Tag[];
  selectedTags: string[];
  setSelectedTags: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  const handleCategoryChange = (tagId: string) => {
    setSelectedTags((pre) => {
      if (pre.includes(tagId)) {
        // Subcategory is already selected, remove it
        return pre.filter((id) => id !== tagId);
      } else {
        // Subcategory is not selected, add it
        return [...pre, tagId];
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
        Tag
      </MenuButton>
      <MenuList w="300px" h="300px" overflowY="auto">
        {tags.map((tag) => (
          <VStack key={tag._id} align="flex-start" spacing={2}>
            <Checkbox
              isChecked={selectedTags.includes(tag._id)}
              onChange={() => handleCategoryChange(tag._id)}
            >
              {tag.tag}
            </Checkbox>
          </VStack>
        ))}
      </MenuList>
    </Menu>
  );
};

export default TagCheckbox;
