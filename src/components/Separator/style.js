import styled from 'styled-components';

export const SeparatorContainer = styled.div`
    border-radius: ${({ borderRadius }) => borderRadius ? borderRadius : ""};
    background: ${({ backgroundColor }) => backgroundColor ? backgroundColor : "#000"};
    width: 100%;
    height: ${({ height }) => height ? height : "1px"};
`;