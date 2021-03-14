import React from "react";
import PropTypes from "prop-types";
import CustomText from "../CustomText";

import { LabeledTextContainer } from "./style";
import Flex from "../Flex";

const LabeledText = ({ children, color, label }) => {
  return (
    <LabeledTextContainer>
      <Flex marginBottom="24px">
        <CustomText color={color}>{label}</CustomText>
      </Flex>
      <CustomText color={color}>{children}</CustomText>
    </LabeledTextContainer>
  )
}

LabeledText.propTypes = {
  label: PropTypes.string,
  color: PropTypes.string
}

LabeledText.defaultProps = {
  label: "",
  color: "#fff"
}

export default LabeledText;