import { shade } from 'polished';
import styled from 'styled-components';

export const ButtonContainer = styled.button`
    height: ${({ height }) => height ? height : "40px"};

    background: ${({ backgroundColor }) => backgroundColor ? backgroundColor : "#fff"};
    color: ${({ color }) => color ? color : "#fff"};

    border: none;
    border-radius: ${({ borderRadius }) => borderRadius ? borderRadius : "0px"};
    padding: 0.5rem 0.5rem;

    transition: background 0.5s;

    &:hover {
        background: ${({ backgroundColor }) => 
            backgroundColor ? shade(0.2, backgroundColor) : shade(0.2, "#fff")}
    }
`;