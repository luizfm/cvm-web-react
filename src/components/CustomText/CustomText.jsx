import React from 'react';
import PropTypes from 'prop-types';

import { CustomTextContainer } from './style'
;
const CustomText = ({ children, fontSize, fontWeight, color, lineHeight, ...props }) => {
    return (
        <CustomTextContainer 
            fontSize={fontSize}
            fontWeight={fontWeight}
            color={color}
            lineHeight={lineHeight}
            {...props}
        >
            {children}
        </CustomTextContainer>
    );
}

CustomText.propTypes = {
    fontSize: PropTypes.string,
    fontWeight: PropTypes.number,
    color: PropTypes.string,
    lineHeight: PropTypes.string
}

CustomText.defaultProps = {
    fontSize: "1rem",
    fontWeight: 400,
    color: "#000",
    lineHeight: ""
}

export default CustomText;