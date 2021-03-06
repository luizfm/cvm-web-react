import React from 'react';
import PropTypes from 'prop-types';

import { ButtonContainer } from './style';

const Button = ({ children, backgroundColor, color, borderRadius, height, ...props }) => {
    return (
        <ButtonContainer 
            backgroundColor={backgroundColor} 
            height={height} 
            borderRadius={borderRadius}
            color={color}
            {...props}
        >
            {children}
        </ButtonContainer>
    )
}

Button.propTypes = {
    backgroundColor: PropTypes.string,
    height: PropTypes.string,
    borderRadius: PropTypes.string,
    color: PropTypes.string
}

export default Button;