import React from 'react';
import PropTypes from 'prop-types';

import { TextWithImageContainer, TextContent, ImageContent } from './style';
import Flex from '../Flex';

const TextWithImage = ({ children, imagePath, margin, direction, rotateImage, flex }) => {

   return (
       <TextWithImageContainer direction={direction} >
           <Flex marginRight={margin} marginLeft={margin} justifyContent="center" alignItems="center" flex={flex}>
                <TextContent>{children}</TextContent>
           </Flex>

           <ImageContent src={imagePath} rotateImage={rotateImage} />
       </TextWithImageContainer>
   )
}

TextWithImage.propTypes = {
    imagePath: PropTypes.string.isRequired,
    margin: PropTypes.string,
    direction: PropTypes.string,
    rotateImage: PropTypes.string,
    flex: PropTypes.bool
}

TextWithImage.defaultProps = {
    margin: "",
    direction: "",
    rotateImage: null,
    flex: false
}

export default TextWithImage;