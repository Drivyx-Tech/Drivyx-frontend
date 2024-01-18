import { ROUTE_PATH } from "@/constants/ROUTE_PATH";
import { Checkbox, Link, Text } from "@chakra-ui/react";
import React from "react";

type Props = {
  isChecked?: boolean;
  setIsChecked?: any;
  colorTheme?: "light" | "dark";
};

function TermsAndPrivacyCheckbox({
  isChecked,
  setIsChecked,
  colorTheme,
}: Props) {
  return (
    <Checkbox
      size="sm"
      textColor={colorTheme === "light" ? "gray.300" : "blue"}
      isRequired
      defaultChecked={isChecked}
      onChange={() => setIsChecked(!isChecked)}
      w={"fit-content"}
    >
      <Text fontSize={"xs"}>
        I agree to Drivyx's{" "}
        <Link
          fontSize={"xs"}
          fontWeight={"bold"}
          color={"tertiary.400"}
          href={ROUTE_PATH.NON_AUTH.TERMS_AND_CONDITIONS}
          target="_blank"
        >
          terms and conditions
        </Link>{" "}
        and{" "}
        <Link
          fontSize={"xs"}
          fontWeight={"bold"}
          color={"tertiary.400"}
          href={ROUTE_PATH.NON_AUTH.PRIVACY_POLICY}
          target="_blank"
        >
          privacy policy
        </Link>
      </Text>
    </Checkbox>
  );
}

export default TermsAndPrivacyCheckbox;
