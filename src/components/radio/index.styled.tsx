import styled from "styled-components";
import { colors } from "../theme/theme";


export const RadioContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
`;

export const RadioLabel = styled.label`

`;

const RADIO_SIZE = '1.25rem';

export const RadioInput = styled.input.attrs({type: "radio"})`
    width: ${RADIO_SIZE};
    height: ${RADIO_SIZE};
    accent-color: ${colors.mainColor};
`;