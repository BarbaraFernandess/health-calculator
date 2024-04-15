import styled from "styled-components";
import { colors } from "../theme/theme";


export const TextInput = styled.input`
    color: ${colors.mainColor};
    border: 1px solid ${colors.mainColor};
    outline: none;
    padding: 0 0.5rem;
    border-radius: 0.5rem;

    &:focus{
        box-shadow: 0 0 0 0.1rem ${colors.mainColor}55;
    }
`;