import React from 'react';
import PropTypes from 'prop-types';

import { InputContainer } from './style'

const Input = React.forwardRef(({ name, placeholder, color, type, height, width, backgroundColor, ...props }, ref) => {
    return (
        <InputContainer
            name={name}
            placeholder={placeholder}
            color={color}
            height={height}
            width={width}
            backgroundColor={backgroundColor}
            ref={ref}
            type={type}
            {...props} 
        />
    )
})

Input.propTypes = {
    placeholder: PropTypes.string,
    color: PropTypes.string,
    height: PropTypes.string,
    width: PropTypes.string,
    backgroundColor: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string.isRequired
}

Input.defaultProps = {
    placeholder: null,
    color: null,
    height: null,
    width: null,
    backgroundColor: null,
    type: null,
}

export default Input;