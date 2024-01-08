import {
  Avatar,
  Button,
  Center,
  HStack,
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
import { ROUTE_PATH } from "@/constants/ROUTE_PATH";
import Organization from "@/ui/SVG/Organization";

function ProfileMenu() {
  const toast = useToast();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const companyUrl = useAppSlector(
    (state) => state.tmpStore.user?.company?.company_profile_url
  );
  const profileUrl = process.env.NEXT_PUBLIC_S3_USER_BUCKET + `${companyUrl}`;

  // FACK SIGNOUT
  const handleSignout = async () => {
    // const accessToken = localStorage.getItem("accessToken") as string;

    // if (!accessToken) return;
    // const res = await signout({ accessToken: accessToken });

    // if (res.statusCode !== 200)
    //   return toast({
    //     title: "something went wrong",
    //     status: "error",
    //     duration: 3000,
    //     isClosable: true,
    //   });

    // wait for 1 sec and show a toast message
    setTimeout(() => {
      toast({
        title: "Signed out successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }, 2000);

    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    dispatch(tokenAction.clearToken());
    dispatch(tmpStoreAction.clearState());

    router.push(ROUTE_PATH.NON_AUTH.HOME);
  };

  return (
    <HStack spacing={4}>
      <Link href={ROUTE_PATH.NON_AUTH.MARKETPLACE.HOME}>
        <Button
          display={{ base: "none", lg: "inline-flex" }}
          fontSize={"sm"}
          fontWeight={600}
          variant={"solid"}
          color={"white"}
          bg={"secondary.500"}
          _hover={{
            bg: "secondary.default",
          }}
          transition={"all .25s ease-in-out"}
        >
          Marketplace
        </Button>
      </Link>
      <Menu closeOnSelect={false}>
        <MenuButton as={Button} variant={"link"} cursor={"pointer"}>
          <Avatar
            w={"40px"}
            h={"40px"}
            borderRadius={5}
            src={profileUrl}
            icon={
              <Organization style={{ width: 24, height: 24, color: "white" }} />
            }
            bgColor={"#e9e9e9"}
            shadow={"sm"}
            overflow={"hidden"}
          />
        </MenuButton>
        <MenuList minWidth="200px">
          <MenuGroup title="Account">
            <MenuItem
              as={Link}
              href={ROUTE_PATH.DASHBOARD.HOME}
              _hover={{ textDecoration: "none" }}
              value="dashboard"
              px={8}
            >
              Dashboard
            </MenuItem>
            <MenuItem
              as={Link}
              href={ROUTE_PATH.DASHBOARD.PROFILE}
              _hover={{ textDecoration: "none" }}
              value="profile"
              px={8}
            >
              Profile
            </MenuItem>
            <MenuItem
              as={Link}
              href={ROUTE_PATH.DASHBOARD.PROJECT}
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
    </HStack>
  );
}

export default ProfileMenu;
