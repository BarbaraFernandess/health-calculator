import styled from "styled-components";
import { colors } from "../theme/theme";

export const ButtonElement = styled.button.attrs({type: "button"})`
    background-color: ${colors.backgroundColor};
    border-radius: 0.5rem;
    color: white;
    border-style: none;
    cursor: pointer;
    font-weight: 700;
    font-size: 1rem;
    transition: 0.3s;
    padding: 0.3rem 0.7rem;

    &:hover{
        background-color: ${colors.mainColor};
        color: white;
    }
`;