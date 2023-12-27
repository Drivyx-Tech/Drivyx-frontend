import { ROUTE_PATH } from "@/constants/ROUTE_PATH";
import { Checkbox, Link } from "@chakra-ui/react";
import React from "react";

type Props = {
  isChecked?: boolean;
  setIsChecked?: any;
};

function TermsAndPrivacyCheckbox({ isChecked, setIsChecked }: Props) {
  return (
    <Checkbox
      size="sm"
      colorScheme="blue"
      isRequired
      isChecked={isChecked}
      onChange={() => setIsChecked(!isChecked)}
      w={"fit-content"}
    >
      I agree to Drivyx's{" "}
      <Link
        fontWeight={"bold"}
        color={"secondary.600"}
        href={ROUTE_PATH.NON_AUTH.TERMS_AND_CONDITIONS}
        target="_blank"
      >
        terms and conditions
      </Link>{" "}
      and{" "}
      <Link
        fontWeight={"bold"}
        color={"secondary.600"}
        href={ROUTE_PATH.NON_AUTH.PRIVACY_POLICY}
        target="_blank"
      >
        privacy policy
      </Link>
    </Checkbox>
  );
}

export default TermsAndPrivacyCheckbox;
