import styled from 'styled-components';

export const ButtonContainer = styled.button`
    height: ${({ height }) => height ? height : "40px"};

    background: ${({ backgroundColor }) => backgroundColor ? backgroundColor : "#fff"};
    color: ${({ color }) => color ? color : "#fff"};

    border: none;
    border-radius: ${({ borderRadius }) => borderRadius ? borderRadius : "0px"};
`;