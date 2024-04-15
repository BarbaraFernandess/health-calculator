import { createGlobalStyle } from "styled-components";
import { colors } from "./components/theme/theme";

export const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        min-height: 100vh;
        width: 100vw;
        background-color: ${colors.backgroundColor};
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;
    }
`;