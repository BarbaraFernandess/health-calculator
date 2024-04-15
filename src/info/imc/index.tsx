import React from "react";
import { AllContainer, SectionContainer, Separator, Title } from "./index.styled";
import ImcInfo from "./components/imc-info";
import ImcResult from "./components/imc-result";

const Imc: React.FC = () =>{
    return(
    <AllContainer>
        <Title>Calculadora de Índice de Massa Corporal (adultos)</Title>
        <SectionContainer id="imc-container">
            <ImcInfo/>
            <ImcResult />
        </SectionContainer>
        <Separator />
    </AllContainer>      
    );
}

export default Imc;
