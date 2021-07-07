import React from 'react';
import { Link } from '@reach/router';

import logoImg from '../../assets/logo.svg';
import kids from '../../assets/kids.svg';

import { Container, Content, KidsImageContainer, LogoImageContainer } from './style';

const Presentation = () => {
    return (
        <Container>
            <div>
                <Content>
                    <LogoImageContainer>
                        <img src={logoImg} alt="Logo cvm"/>
                    </LogoImageContainer>

                    <h1>A CVM ajuda a comunidade com seus serviços de creche e orfanato</h1>
                </Content>

                <KidsImageContainer src={kids}/>
            </div>

            <Link to="/home">Ir para o site</Link>
        </Container>
    )
}

export default Presentation;
