import {
  Avatar,
  Button,
  Flex,
  Text,
  Input,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { useRef } from "react";
import { useAppSlector } from "@/services/redux/hooks";
import { EditIcon } from "@chakra-ui/icons";
import { Utiles } from "@/services/utils";
import Organization from "@/ui/SVG/Organization";
import { ImgFile } from "@/services/endpoints/type";

type Props = {
  companyImgFile: ImgFile;
  setCompanyImgFile: React.Dispatch<React.SetStateAction<ImgFile>>;
};

export function CompanyIconUpload({
  companyImgFile,
  setCompanyImgFile,
}: Props) {
  const company = useAppSlector((state) => state.tmpStore.user?.company);
  const inputRef = useRef<any>();

  const handleImgChange = async (e: any) => {
    const file = e.target.files;
    const base64 = await Utiles.getBase64(file[0]);
    setCompanyImgFile({
      type: file[0].type,
      size: file[0].size.toString(),
      base64: base64 as string,
      ext: file[0].type.split("/")[1],
      name: file[0].name,
    });
  };

  return (
    <Flex>
      <HStack w={"fit-content"} justify={"center"} align={"center"}>
        <Avatar
          src={
            companyImgFile.base64
              ? companyImgFile.base64
              : process.env.NEXT_PUBLIC_S3_USER_BUCKET +
                company?.company_profile_url
          }
          // icon={<Organization style={{ width: 60, height: 60 }} />}
          w="100px"
          h="100px"
          borderRadius={5}
          bgColor={"white"}
          overflow={"hidden"}
        />

        <VStack align={"left"}>
          <Text>Upload organization logo</Text>
          <Text fontSize={"12px"} color={"gray.500"}>
            Image should be in JPG or PNG format and not larger than 5MB
          </Text>
          <Button
            w="fit-content"
            leftIcon={<EditIcon />}
            size={"xs"}
            onClick={(e) => {
              e.preventDefault();
              inputRef.current.click();
            }}
          >
            Select file
          </Button>
        </VStack>

        <Input
          type="file"
          onChange={handleImgChange}
          ref={inputRef}
          display="none"
        />
      </HStack>
    </Flex>
  );
}
