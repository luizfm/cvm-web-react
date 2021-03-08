import React from 'react';
import PropTypes from 'prop-types';

import { SeparatorContainer } from './style';

const Separator = ({ backgroundColor, height, borderRadius}) => {
    return (
        <SeparatorContainer 
            backgroundColor={backgroundColor}
            height={height}
            borderRadius={borderRadius}
        />
    )
}

Separator.propTypes = {
    backgroundColor: PropTypes.string,
    height: PropTypes.string,
    borderRadius: PropTypes.string
}

Separator.defaultProps = {
    backgroundColor: null,
    height: null,
    borderRadius: null,
}

export default Separator;