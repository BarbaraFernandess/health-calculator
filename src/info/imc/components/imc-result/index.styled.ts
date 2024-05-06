import styled from "styled-components";
import { colors } from "../../../../components/theme/theme";

export const Container = styled.div`
    background-color: ${colors.lightGray};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 1rem;
    border-radius: 0.5rem;

    @media only screen and (max-width: 768px) {
        display: grid;
        grid-template-columns: 1fr;
        height: fit-content;
        width: fit-content;
    }
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-row-gap: 1rem;
    grid-column-gap: 0.5rem;
`;

export const Label = styled.span`
    font-size: 1rem;
    font-weight: 700;
    color: ${colors.mainColor};
    align-self: center;
`;

export const RadioContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
`;

export const ContainerButton = styled.div`
    background-color: ${colors.lightGray};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    padding: 1rem;
    gap: 1rem;
    border-radius: 0.5rem;
`;
