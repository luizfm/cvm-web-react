import React from 'react';
import { Link } from '@reach/router';

import { FooterContainer, FooterContent, FooterCopyRight } from './style';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <div>
                    <h3>Geral</h3>
                    <Link to="/">Galeria de fotos</Link>
                    <Link to="/">Cursos</Link>
                    <Link to="/">Agenda de eventos</Link>
                </div>

                <div>
                    <h3>Ajude</h3>
                    <Link to="/">Faça uma doação</Link>
                    <Link to="/">Trabalhe conosco</Link>
                </div>

                <div>
                    <h3>Contato</h3>
                    <span>Rua Otto Júlio Malina - 1306, Ipiranga - São José - SC.</span>
                    <span>(48) 3357-9400</span>
                    <span>comunicacaosocialcvm@floripa.com.br</span>
                </div>
            </FooterContent>

            <FooterCopyRight>
                <span>Copyright © 2021 - CVM - Todos os direitos reservados - Desenvolvido por estudantes da IESGF</span>
            </FooterCopyRight>
        </FooterContainer>
    )
}

export default Footer;
