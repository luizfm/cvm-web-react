import styled from 'styled-components';

export const ModalOverlay = styled.div`
    position: fixed;

    background: #12AFCB;

    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ModalContainer = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    padding: 9rem 1rem;
    margin-top: 50px;
`

export const ModalItem = styled.a`
    font-size: 1rem;
    color: #fff;
`;

export const CloseModalContainer = styled.button`
    position: absolute;

    top: 0;
    right: 0;

    background: transparent;
    border: none;
`