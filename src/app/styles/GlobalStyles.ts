// globalStyles.js
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.colors.blue[500]};
        color: ${({ theme }) => theme.colors.white[500]};
        max-width: 1200px;
    }

    body,
    input,
    textarea,
    select,
    button {
        font: 400 1rem "Poppins", sans-serif;
        border-width: 0;
    }

    button {
        cursor: pointer;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    input {
        outline: none;
    }
`;
