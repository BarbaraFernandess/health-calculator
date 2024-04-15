import styled from "styled-components";
import { colors } from "../theme/theme";



export const SelectElement = styled.select`
    color: ${colors.mainColor};
    border: 1px solid ${colors.mainColor};
    padding: 0 0.5rem;
    border-radius: 0.5rem;
    outline: none;
`;

export const SelectOption = styled.option`
    color: ${colors.mainColor};
    padding: 0 0.5rem;

    &:checked{
        background-color: ${colors.mainColor};
        color: white;
    }
`;