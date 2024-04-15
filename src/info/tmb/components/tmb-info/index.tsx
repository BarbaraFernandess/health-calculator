import React from "react";
import { Container, Content, Title } from "./index.styled";


const TmbInfo: React.FC = () =>{
    return(
    <Container
    >
        <Title>Taxa Metabólica Basal (TMB): o que é?</Title>

        <Content>A taxa metabólica basal (TMB) é a quantidade de energia necessária para a 
            manutenção das funções vitais do organismo ao longo de 24 horas. Ela é medida em 
            calorias, que é a energia extraída pelo nosso corpo a partir dos macronutrientes 
            (carboidratos, proteínas e gorduras totais). 
        </Content>
        
    </Container>
    );
}

export default TmbInfo;