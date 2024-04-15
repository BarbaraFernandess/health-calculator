import React from "react";
import { AllContainer, SectionContainer, Separator, Title } from "./index.styled";
import TmbInfo from "./components/tmb-info";
import TmbResult from "./components/tbm-result";

const Tmb: React.FC = () =>{
    return(
    <AllContainer id="tmb-container">
        <Title>Calculadora de taxa metabólica basal</Title>
        <SectionContainer>
            <TmbInfo/>
            <TmbResult />
        </SectionContainer>
        <Separator />
    </AllContainer>      
    );
}

export default Tmb;
