import React from 'react';
import PropTypes from 'prop-types';

import { ButtonContainer } from './style';

const Button = ({ children, onClick, backgroundColor, color, borderRadius, height, ...props }) => {
    return (
        <ButtonContainer 
            onClick={onClick}
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
    onClick: PropTypes.func,
    height: PropTypes.string,
    borderRadius: PropTypes.string,
    color: PropTypes.string
}

Button.defaultProps = {
    backgroundColor: null,
    onClick: () => {},
    height: null,
    borderRadius: null,
    color: null
}


export default Button;