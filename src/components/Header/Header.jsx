import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';
import Button from '../Button';
import Flex from '../Flex';
import Input from '../Input';

import { HeaderContainer, LogoContainer, LinksContainer, LoginContainer, Logo } from './style';

const Header = () => {
    return (
        <HeaderContainer>
            <LogoContainer>
                <Link to="/home">
                    <Logo src={logoImg} />
                </Link>
            </LogoContainer>

            <LinksContainer>
                <Link to="/">A Cvm</Link>
                <Link to="/">Educação Infatil</Link>
                <Link to="/">Acolhimento institucional</Link>
                <Link to="/">Centro de Atendimento Social</Link>
                <Link to="/">Ajude</Link>
            </LinksContainer>

            <LoginContainer>
                <Input name="email"backgroundColor="#8FE6F5" placeholder="Email" type="email"/>
                <Input name="password" backgroundColor="#8FE6F5" placeholder="Senha" type="password"/>

                <Flex marginLeft="12px">
                    <Button backgroundColor="#EDFF8F" borderRadius="12px">Entrar</Button>
                </Flex>
            </LoginContainer>
        </HeaderContainer>
    )
}

export default Header;