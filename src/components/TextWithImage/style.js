import styled from 'styled-components';

export const TextWithImageContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-direction: ${({ direction }) => direction ? direction : "row"};

    padding: 4rem;
    
    @media(max-width: 900px) {
        flex-direction: column;
        align-items: center;
        padding: 2rem;
    }

    @media(max-width: 450px) {
        padding: 2rem 0.5rem;
    }
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

    @media(max-width: 1000px) {
        width: 370px;
        height: 200px;
        transform: none;
        margin-top: 24px;
    }

    @media(max-width: 450px) {
        width: 240px;
        height: 120px;
        transform: none;
        margin-top: 24px;
    }
`;