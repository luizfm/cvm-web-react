import styled from 'styled-components';
import { shade } from 'polished';

export const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    padding: 1rem 5rem;
    background: #12AFCB;

    /* position: absolute;
    bottom: 0; */

    padding: 2rem 3rem;
`;

export const FooterContent = styled.main`
    display: flex;
    flex: 1;
    justify-content: center;

    div {
        a {
            color: #fff;
            text-align: center;

            & + a {
                margin-top: 8px;
            }

            transition: color 0.5s;
        }

        a:hover {
            color: ${shade(0.2, "#fff")}
        }

        span {
            color: #fff;
            text-align: center;

            & + span {
                margin-top: 8px;
            }
        }

        h3 {
            color: #fff;
            margin-top: 1rem;
        }
    }

    @media(min-width: 601px) {
            div {
            display: flex;
            flex-direction: column;
            align-items: center;

            h3 {
                color: #fff;
                margin-bottom: 1rem;
            }

            a {
                & + a {
                    margin-top: 8px;
                }
            }

            span {
                max-width: 270px;

                & + span {
                    margin-top: 8px;
                }
            }

            & + div {
                margin-left: 6rem;
            }
        }
    }

    @media(max-width: 600px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;

        div {
            display: flex;
            flex-direction: column;
            align-items: center;

            & + div {
                margin-top: 1rem;
            }

            h3 {
                margin-bottom: 16px;
            }
        }


    }
`;

export const FooterCopyRight = styled.div`
    display: flex;
    margin-top: 2rem;

    span {
        color: #fff;
        font-size: 0.8rem;
        text-align: center;
    }
`;