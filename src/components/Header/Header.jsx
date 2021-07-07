import React, { useCallback, useState } from 'react';
import { Link } from '@reach/router';
import { BiArrowToRight, BiMenu } from 'react-icons/bi';

import logoImg from '../../assets/logo.svg';
import Button from '../Button';
import Flex from '../Flex';
import Input from '../Input';

import { HeaderContainer, LogoContainer, LinksContainer, LoginContainer, Logo, InputsContainer } from './style';
import MobileLinksHeader from './MobileLinksHeader/MobileLinksHeader';

const Header = () => {
    const [isHeaderOptionsModalVisible, setIsHeaderOptionsModalVisible] = useState(false);

    const handleHeaderOptionModalVisibility = useCallback(() => {
        setIsHeaderOptionsModalVisible(!isHeaderOptionsModalVisible)
    }, [isHeaderOptionsModalVisible])

    return (
        <HeaderContainer>
            <LogoContainer>
                <Link to="/home">
                    <Logo src={logoImg} />
                </Link>
            </LogoContainer>

            <LinksContainer>
                <Button backgroundColor="transparent" onClick={handleHeaderOptionModalVisibility}>
                    <BiMenu size={36}/>
                </Button>

                <Link to="/history">A Cvm</Link>
                <Link to="/">Educação Infatil</Link>
                <Link to="/">Acolhimento institucional</Link>
                <Link to="/">Centro de Atendimento Social</Link>
                <Link to="/">Ajude</Link>
            </LinksContainer>

            {isHeaderOptionsModalVisible && <MobileLinksHeader onClick={handleHeaderOptionModalVisibility} />}

            <LoginContainer>
                <InputsContainer>
                    <Input
                        name="email"
                        backgroundColor="#8FE6F5"
                        placeholder="Email"
                        type="email"
                    />
                    <Input
                        name="password"
                        backgroundColor="#8FE6F5"
                        placeholder="Senha"
                        type="password"
                    />
                </InputsContainer>

                <Flex marginLeft="12px">
                    <Button backgroundColor="#EDFF8F" borderRadius="12px">
                        <BiArrowToRight color="#12AFCB" size={24} />
                    </Button>
                </Flex>
            </LoginContainer>
        </HeaderContainer>
    )
}

export default Header;
