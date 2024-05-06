import styled from "styled-components";

export const SectionContainer = styled.section`
    display: flex;
    flex-direction: row;
    padding: 5rem 0;
    justify-content: center;
    gap: 4rem;

    @media only screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        padding: 1rem;
    }
`;

export const Title = styled.h1`
    padding-top: 1rem;
    color: white;
    align-self: center;
   
    @media only screen and (max-width: 768px) {
        text-align: center;
        padding: 2rem;
    }
`;

export const AllContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media only screen and (max-width: 768px) {
        display: flex;
        justify-content: center;
        align-self: auto;
    }
`;

export const Separator = styled.hr`
    border-top: 0.05rem solid white;
    width: 70%;

    @media only screen and (max-width: 768px) {
        width: 100%;
    }
`;