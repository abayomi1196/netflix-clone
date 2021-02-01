import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html, body {
        font-family: 'Poppins', Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-smoothing: grayscale;
        background-color: #000;
        color: #333;
        font-size: 1rem;
        margin:0;
    }
`;
