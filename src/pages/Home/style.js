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
`;

export const NoticeDatesContainer = styled.div`
    margin-top: 40px;

    div {
        display: flex;
        flex-direction: row;
        align-items: center;

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
        margin-bottom: 32px;
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

    div {
        flex: 1;
    }

`;

export const SocialMediaLinks = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
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
    }


    & + div {
        margin-top: 5rem;  
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

    h3, h5 {
        color: #12AFCB;
        margin-bottom: 24px;
    }

    a {
        color: #12AFCB;
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