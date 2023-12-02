import { updateIcon } from "@/services/endpoints/company";
import { IconFile } from "@/services/endpoints/type";
import { Button, Flex, Image } from "@chakra-ui/react";
import { useState } from "react";

function ImageUpload() {
  const [iconFile, setIconFile] = useState<IconFile>();
  const [imagePreview, setImagePreview] = useState("");

  console.log("iconFile---->", iconFile);

  const getBase64 = (file: any) => {
    const base = new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      console.log("reader", reader);

      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

    return base;
  };

  const handleSelectImage = async (e: any) => {
    const file = e.target.files;
    console.log("file", file[0]);

    const base64 = await getBase64(file[0]);

    setIconFile({
      name: file[0].name,
      type: file[0].type,
      size: file[0].size.toString(),
      base64: base64 as string,
      ext: file[0].type.split("/")[1],
    });

    console.log("the whole icon file:", iconFile);
  };

  const handleUpload = async () => {
    try {
      if (!iconFile) return;
      const res = await updateIcon({
        iconFile: iconFile,
      });

      console.log("res", res);
    } catch (error) {}
  };

  return (
    <Flex>
      <Button onClick={handleUpload}>upload</Button>
      <Flex>
        <Image
          src={imagePreview}
          alt={`Preview`}
          style={{ width: "200px", height: "auto" }}
        />
      </Flex>
      <input type="file" onChange={handleSelectImage} />
    </Flex>
  );
}
