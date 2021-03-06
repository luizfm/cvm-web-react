import { shade } from 'polished';
import styled from 'styled-components';

export const HeaderContainer = styled.head`
    display: flex;
    padding: 1rem 12rem;
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
`;

export const LoginContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`