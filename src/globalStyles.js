import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    
    body {
        padding: 144px 0px 111px 0px;

        display: flex;
        justify-content: center;
        align-items: center;

        color: #333333;
        background: #FB6B6B;
        font-family: 'Recursive', sans-serif;
    }
`;

export default GlobalStyle;