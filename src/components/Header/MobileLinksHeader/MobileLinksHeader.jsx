import React from 'react';
import { Link } from '@reach/router';
import { GrClose } from 'react-icons/gr';

import Flex from '../../Flex';

import { ModalOverlay, CloseModalContainer, ModalContainer, ModalItem } from './style';

const MobileLinksHeader = ({ onClick }) => {

    const handleCloseModal = () => {
        onClick();
    }

    return (
        <ModalOverlay>
            <ModalContainer>
                <Flex marginBottom="24px">
                    <Link to="/">
                        <ModalItem>A CVM</ModalItem>
                    </Link>
                </Flex>

                <Flex marginBottom="24px">
                    <Link to="/">
                        <ModalItem>Educação Infatil</ModalItem>
                    </Link>
                </Flex>

                <Flex marginBottom="24px">
                    <Link to="/">
                        <ModalItem>Acolhimento institucional</ModalItem>
                    </Link>
                </Flex>

                <Flex marginBottom="24px">
                    <Link to="/">
                        <ModalItem>Centro de Atendimento Social</ModalItem>
                    </Link>
                </Flex>

                <Flex marginBottom="24px">
                    <Link to="/">
                        <ModalItem>Ajude</ModalItem>
                    </Link>
                </Flex>

                <CloseModalContainer onClick={handleCloseModal}>
                    <GrClose size={18} color="#fff"/>
                </CloseModalContainer>
            </ModalContainer>
        </ModalOverlay>
    )
}

export default MobileLinksHeader;
