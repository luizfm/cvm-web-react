import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0
    }

    @media(max-width: 1080px) {
        html {
            font-size: 93.75%;
        }
    }
    @media(max-width: 720px) {
        html {
            font-size: 87.5%;
        }
    }

    html {
        font-size: 10px;
    }

    body {
        background: #fff;
        color: #000;
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font: 400 1.6rem 'Poppins', sans-serif;
    }

    button {
        cursor: pointer;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
`;
