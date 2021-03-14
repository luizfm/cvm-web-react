import React from "react";
import PropTypes from "prop-types";
import CustomText from "../CustomText";

import Flex from "../Flex";
import { useMediaQuery } from "../../hooks/mediaQuery";

import { LabeledTextContainer } from "./style";

const LabeledText = ({ children, color, label }) => {
  const hasMediaMatch = useMediaQuery('(min-width: 500px)');

  const handleFontSize = hasMediaMatch ? "16px" : "12px";

  return (
    <LabeledTextContainer>
      <Flex marginBottom="24px">
        <CustomText color={color} fontSize={handleFontSize}>{label}</CustomText>
      </Flex>
      <CustomText color={color} fontSize={handleFontSize}>{children}</CustomText>
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