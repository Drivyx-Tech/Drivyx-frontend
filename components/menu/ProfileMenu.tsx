import {
  Avatar,
  Button,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
} from "@chakra-ui/react";
import defaultAvatar from "../../public/svg/person-circle-auth.svg";
import React from "react";

function ProfileMenu() {
  const companyIcon = "";

  return (
    <div>
      <Menu closeOnSelect={false}>
        <MenuButton
          as={Button}
          rounded={"full"}
          variant={"link"}
          cursor={"pointer"}
          minW={0}
        >
          <Avatar size={"md"} src={companyIcon || defaultAvatar.src} />
        </MenuButton>
        <MenuList minWidth="240px">
          <MenuOptionGroup defaultValue="asc" title="Order" type="radio">
            <MenuItemOption value="asc">Ascending</MenuItemOption>
            <MenuItemOption value="desc">Descending</MenuItemOption>
          </MenuOptionGroup>
          <MenuDivider />
          <MenuOptionGroup title="Country" type="checkbox">
            <MenuItemOption value="email">Email</MenuItemOption>
            <MenuItemOption value="phone">Phone</MenuItemOption>
            <MenuItemOption value="country">Country</MenuItemOption>
          </MenuOptionGroup>
        </MenuList>
      </Menu>
    </div>
  );
}

export default ProfileMenu;
