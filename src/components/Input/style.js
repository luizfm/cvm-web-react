import styled from 'styled-components';

export const InputContainer = styled.input`
    height: ${({ height }) => height ? height : "40px"};
    border: none;
    border-radius: 12px;
    background: ${({ backgroundColor }) => backgroundColor ? backgroundColor : "#fff"};

    text-align: center;
    color: ${({ color }) => color ? color : "#fff"};
    font-size: 1rem;

    & + input {
        margin-left: 10px;
    }
   
   &::placeholder {
    color: ${({ color }) => color ? color : "#fff"};
   }
`;