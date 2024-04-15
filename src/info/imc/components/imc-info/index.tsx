import React from "react";
import { Container, Title, Content } from "./index.styled";


const ImcInfo: React.FC = () =>{
    return(
    <Container>
        <Title>Índice de massa corporal (IMC): o que é?</Title>

        <Content>
        O Índice de Massa Corporal (IMC) é uma das principais ferramentas,
        adotada inclusive pela Organização Mundial de Saúde (OMS), para calcular
        o chamado “peso ideal”. Obtido a partir do peso e da altura do indivíduo,
        o IMC também aponta níveis de magreza e obesidade, que são usados para 
        nortear o trabalho de profissionais de saúde e de educadores físicos.


        </Content>
        
    </Container>
    );
}

export default ImcInfo;