import styled from 'styled-components';
import { shade } from 'polished';


export const Container = styled.div`
    height: 100vh;

    background: #12AFCB;

    display: flex;
    flex-direction: column;
    align-items: center;

    div {
        display: flex;
    }

    a {
        margin-top: 5rem;
        padding: 1rem;
        background: #EDFF8F;
        color: #FF9668;
        width: 265px;
        text-align: center;
        border-radius: 16px;

        transition: background 0.5s;
    }

    a:hover {
        background: ${shade(0.2, '#EDFF8F')};
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;

    img {
        margin-left: 40px;
        height: 300px;
        width: 190px;
    }

    h1 {
        font-size: 3rem;
        color: #fff;
        max-width: 420px;
    }
`;

export const LogoImageContainer = styled.div`
    position: relative;
    height: 50%;
`;

export const KidsImageContainer = styled.img`
    height: 470px;
    margin-top: 60px;   
    margin-left: 100px;
`;