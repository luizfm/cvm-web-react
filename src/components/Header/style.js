import { shade } from 'polished';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    padding: 1rem 5rem;
    background: #12AFCB;
`;

export const LogoContainer = styled.div``;

export const Logo = styled.img`
    height: 80px;
    width: 80px;
`;

export const LinksContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    flex: 1;

    a {
        color: #fff;
        max-width: 90px;
        margin-right: 2rem;
        text-align: center;

        transition: color 0.5s;

        &:last-child {
            color: #EDFF8F;
        }

        &:hover {
            color: ${shade(0.2, "#fff")}
        }
    }

    @media(min-width: 871px) {
        button {
            display: none;
        }
    }

    @media(max-width: 870px) {
        a {
            display: none;
        }
    }
`;

export const LoginContainer = styled.div`
    display: flex;

    @media(max-width: 1119px) {
        align-items: center;
    }

    @media(min-width: 1120px) {

        align-items: center;
        justify-content: center;
    }

    @media(max-width: 470px) {
        display: none;
    }
`

export const InputsContainer = styled.div`
    display: flex;

    input {
        margin-right: 4px;
    }

    @media(max-width: 1119px) {
        flex-direction: column;
        margin-right: 0px;
        
        input {
            margin-bottom: 4px;
        }
    }
`;