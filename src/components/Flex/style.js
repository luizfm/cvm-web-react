import styled from 'styled-components';

export const FlexContainer = styled.div`
    margin-right: ${({ marginRight }) => marginRight ? marginRight : ""};
    margin-left: ${({ marginLeft }) => marginLeft ? marginLeft : ""};
    margin-top: ${({ marginTop }) => marginTop ? marginTop : ""};
    margin-bottom: ${({ marginBottom }) => marginBottom ? marginBottom : ""};
    display: ${({ flex }) => flex ? "flex" : ""};
    align-items: ${({ alignItems }) => alignItems ? alignItems : ""};
    justify-content: ${({ justifyContent }) => justifyContent ? justifyContent : ""};
    direction: ${({ direction }) => direction ? direction : ""};
    padding-left: ${({ padding }) => padding ? padding : ""};
    padding-right: ${({ padding }) => padding ? padding : ""};
`;