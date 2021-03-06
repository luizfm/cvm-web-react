import React from 'react';
import PropTypes from 'prop-types';

import { FlexContainer } from './style';

const Flex = ({ 
    marginRight, 
    marginLeft, 
    marginTop, 
    marginBottom, 
    flex, 
    alignItems, 
    justifyContent, 
    direction, 
    children }) => {
    return (
        <FlexContainer
            marginRight={marginRight}
            marginLeft={marginLeft}
            marginTop={marginTop}
            marginBottom={marginBottom}
            direction={direction}
            flex={flex}
            alignItems={alignItems}
            justifyContent={justifyContent}
        >
            {children}
        </FlexContainer>
    );
}

Flex.propTypes = {
    marginRight: PropTypes.string,
    marginLeft: PropTypes.string,
    marginTop: PropTypes.string,
    marginBottom: PropTypes.string,
    flex: PropTypes.number,
    alignItems: PropTypes.string,
    justifyContent: PropTypes.string,
    direction: PropTypes.string
}

Flex.defaultProps = {
    direction: "row",
    marginRight: null,
    marginLeft: null,
    marginTop: null,
    marginBottom: null,
    flex: null,
    alignItems: null,
    justifyContent: null
}

export default Flex;