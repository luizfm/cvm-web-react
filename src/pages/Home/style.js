import { shade } from 'polished';
import styled from 'styled-components';

export const HomeContainer = styled.div``;

export const HeroSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 4rem;
`;

export const ImageContainer = styled.img`
    height: 800px;

    @media(max-width: 850px) {
        height: 600px
    }

    @media(max-width: 650px) {
        height: 400px
    }

    @media(max-width: 450px) {
        height: 280px
    }
`;

export const NoticeSection = styled.section`
    display: flex;

    justify-content: center;
    flex-direction: column;

    background: #28E7B1;
    padding: 2rem 4rem 0 4rem;

    text-align: center;

    h2 {
        color: #fff;
        margin-bottom: 8px;
    }
`;

export const NoticeContainer = styled.div`
    border: 4px solid #fff;
    border-bottom: none;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    padding: 1rem 0 3rem 0;

    display: flex;
    flex-direction: column;
    align-items: center;

    @media(max-width: 460px) {
        border: 0;
    }
`;

export const NoticeDatesContainer = styled.div`
    margin-top: 40px;

    div {
        display: flex;
        flex-direction: row;
        align-items: center;

        margin-bottom: 32px;

        p {
            margin-right: 1rem;
            color: #fff;
        }

        button {
            border: 0;
            border-radius: 12px;
            padding: 1rem;

            background-color: #DDF4E4;
            width: 400px;

            font-size: 0.8rem;
            
            transition: background 0.5s;

            &:hover {
                background: ${shade(0.2, "#DDF4E4")}
            }
        }

        & + div {
            margin-top: 16px;
        }

        @media(max-width: 620px) {
            button {
                width: 250px;
            }
        }

        @media(max-width: 450px) {
            flex-direction: column;
        }
    }

    a {
        color: #fff;
    }
`;

export const SocialMediaSection = styled.section`
    padding: 3rem;

    display: flex;
    flex-direction: column;

    justify-content: center;
    text-align: center;

    h2 {
        color: #F3C888;
        margin-bottom: 4rem;
    }
`;

export const SocialMediaContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    > span {
        flex: 1;

        .illustration-comp {

        width: 2000px;
        height: 2000px;

        }
    }

    @media(max-width: 880px) {
        flex-direction: column;
    }

`;

export const SocialMediaLinks = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    @media(max-width: 880px) {
        flex-direction: row;
    }
`;

export const MediaLink = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 550px;

    a {
        padding: 0.5rem;
        background: #F3C888;

        border-radius: 12px;

        transition: background 0.5s;
    }

    a:hover {
        background: ${shade(0.2, "#F3C888")}
    }

    div {
        max-width: 420px;
        padding: 2rem;
        background: #F5F5F5;

        p {
            color: #E3CECE;
        }

        @media(max-width: 1080px) {
            max-width: 350px;
        }

        @media(max-width: 980px) {
            max-width: 250px;
        }

        @media(max-width: 880px) {
            display: none;
        }
    }


    & + div {
        margin-top: 5rem;  
    }

    @media(max-width: 880px) {
        & + div {
            margin-top: 0;
            margin-left: 24px;
        }
    }
`;

export const LawInformationSection = styled.section`
    padding: 3rem;

    display: flex;
    align-items: center;
    flex-direction: column;

    h2 {
        max-width: 250px;
        text-align: center;
        color: #F3C888;
        margin-bottom: 4rem;
    }
`;

export const LawInformationContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    > div {
        flex: 1;
        margin-left: 50px;
    }

    @media(max-width: 979px) {
        flex-direction: column;
        
        > div {
            margin-left: 0;
        }
    }
`;

export const LawLinks = styled.div`
    background: #F5F5F5;
    flex: 1;

    width: 600px;
    padding: 1rem 5rem;
    margin-right: 36px;

    border-radius: 16px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    text-align: center;

    h3, h5 {
        color: #12AFCB;
        margin-bottom: 24px;
    }

    a {
        color: #12AFCB;
    }

    @media(min-width: 980px) and (max-width: 1179px) {
        width: 400px;
    }

    @media(max-width: 979px) {
        width: 600px;
        margin-right: 0;
    }

    @media(max-width: 650px) {
        width: 280px;
    }
`;

export const LawDownloads = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;

    a {
        padding: 1rem 4rem;
        background: #C4C4C4;
        color: #fff;
        
        strong {
            margin-right: 8px;
        }

        & + a {
            margin-top: 12px;
        }
    }
`;