import {
  Avatar,
  Button,
  Center,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
} from "@chakra-ui/react";
import defaultAvatar from "../../public/svg/person-circle-auth.svg";
import React from "react";
import { useAppDispatch } from "@/services/redux/hooks";
import { tokenAction } from "@/services/redux/tokens.reducer";

function ProfileMenu() {
  const dispatch = useAppDispatch();
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
        <MenuList minWidth="200px">
          <MenuGroup title="Account">
            <MenuItem
              as={Link}
              href="/dashboard"
              _hover={{ textDecoration: "none" }}
              value="dashboard"
              px={8}
            >
              Dashboard
            </MenuItem>
            <MenuItem
              as={Link}
              href="/dashboard/profile"
              _hover={{ textDecoration: "none" }}
              value="profile"
              px={8}
            >
              Profile
            </MenuItem>
            <MenuItem
              as={Link}
              href="/dashboard/project"
              _hover={{ textDecoration: "none" }}
              value="project"
              px={8}
            >
              Projects
            </MenuItem>
          </MenuGroup>
          <MenuDivider />
          <MenuGroup title="Settings">
            <MenuItem
              as={Link}
              href="/dashboard/example1"
              _hover={{ textDecoration: "none" }}
              value="example1"
              px={8}
            >
              example 1
            </MenuItem>
            <MenuItem
              as={Link}
              href="/dashboard/example2"
              _hover={{ textDecoration: "none" }}
              value="example2"
              px={8}
            >
              example 2
            </MenuItem>
            <MenuItem
              as={Link}
              href="/dashboard/example3"
              _hover={{ textDecoration: "none" }}
              value="example3"
              px={8}
            >
              example 3
            </MenuItem>
          </MenuGroup>
          <MenuDivider />
          <Center>
            <Button
              size={"sm"}
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              variant={"solid"}
              color={"white"}
              bg={"red.500"}
              _hover={{
                bg: "red.600",
              }}
              transition={"all .25s ease-in-out"}
              w={40}
              onClick={() => {
                console.log("sign out");
                // fake signout
                localStorage.removeItem("accessToken");
                localStorage.removeItem("refreshToken");
                dispatch(tokenAction.clearToken());
                window.location.href = "/";
              }}
            >
              Sign out
            </Button>
          </Center>
        </MenuList>
      </Menu>
    </div>
  );
}

export default ProfileMenu;
