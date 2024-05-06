import styled from "styled-components";
import { colors } from "../../../../components/theme/theme";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 35%;

    @media only screen and (max-width: 768px) {
        display: grid;
        grid-template-columns: 1fr;
        height: fit-content;
        width: fit-content;
        padding: 1rem;
    }
`;

const Text = styled.span`
    text-align: justify;
`;

export const Title = styled(Text)`
    font-size: 1.25rem;
    font-weight: 700;
    color: ${colors.lightGray};
`;

export const Content = styled(Text)`
    font-size: 1rem;
    font-weight: 400;
    color: white;
`;