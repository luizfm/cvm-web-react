import styled from 'styled-components';

export const TextWithImageContainer = styled.section`
    display: flex;
    align-items: row;
    justify-content: space-between;
    flex-direction: ${({ direction }) => direction ? direction : "row"};

    padding: 4rem;
`;

export const TextContent = styled.main`
    max-width: 600px;
    color: #000000;
`;

export const ImageContent = styled.img`
    width: 470px;
    height: 300px;

    transform: ${({ rotateImage }) => rotateImage ? `rotate(${rotateImage})` : "none"};

    border-radius: 12px;
`;