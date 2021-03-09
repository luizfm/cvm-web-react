import styled from 'styled-components';

export const CustomTextContainer = styled.p`
    font-size: ${({ fontSize }) => fontSize ? fontSize : ""};
    font-weight: ${({ fontWeight }) => fontWeight ? fontWeight : null};
    color: ${({ color }) => color ? color : ""};
    line-height: ${({ lineHeight }) => lineHeight ? lineHeight : ""};
    text-align: center;
`;