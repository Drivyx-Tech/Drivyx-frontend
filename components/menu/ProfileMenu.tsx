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
  Toast,
  useToast,
} from "@chakra-ui/react";
import defaultAvatar from "../../public/svg/person-circle-auth.svg";
import React from "react";
import { useAppDispatch, useAppSlector } from "@/services/redux/hooks";
import { tokenAction } from "@/services/redux/tokens.reducer";
import { useRouter } from "next/navigation";
import { signout } from "@/services/endpoints/auth";
import { tmpStoreAction } from "@/services/redux/tmpStore.reducer";

function ProfileMenu() {
  const toast = useToast();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const companyUrl = useAppSlector(
    (state) => state.tmpStore.company.company_profile_url
  );
  const profileUrl =
    process.env.NEXT_PUBLIC_S3_USER_BUCKET +
    `${companyUrl}?timestamp=${Date.now()}`;

  const handleSignout = async () => {
    const accessToken = localStorage.getItem("accessToken") as string;

    if (!accessToken) return;
    const res = await signout({ accessToken: accessToken });

    if (res.statusCode !== 200)
      return toast({
        title: "something went wrong",
        status: "error",
        duration: 3000,
        isClosable: true,
      });

    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    dispatch(tokenAction.clearToken());
    dispatch(tmpStoreAction.clearState());
    router.push("/");
  };

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
          <Avatar size={"md"} src={profileUrl} />
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
              Project
            </MenuItem>
          </MenuGroup>
          <MenuDivider />

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
              onClick={handleSignout}
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
