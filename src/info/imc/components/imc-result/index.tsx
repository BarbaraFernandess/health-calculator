import React, { useState, useCallback }from "react";
import {Container, Grid, RadioContainer, Label, ContainerButton} from "./index.styled";
import Radio from "../../../../components/radio";
import Input from "../../../../components/input";
import Button from "../../../../components/button";
import Result from "../../../result-div";

const ImcResult: React.FC = () => {

    const [isMale, setIsMale] = useState<boolean>(false);
    const [isFemale, setIsFemale] = useState<boolean>(false);
    const [height, setHeight] = useState<string>('');
    const [weight, setWeight] = useState<string>('');
    const [error, setError] = useState<boolean>(false);
    const [imc, setImc] =  useState<number>();
    const [clf, setClf] = useState<string>('');

    //clf is a abreviation for classification

    const validadeData = useCallback(( 
        height: string, 
        weight: string, 
        isFemale: boolean, 
        isMale: boolean
    ): boolean => {
        return height === '' || weight === '' || (!isFemale && !isMale)
    }, []);

    const cleanInput = useCallback (() => {
        setHeight('');
        setWeight('');
        setIsFemale(false);
        setIsMale(false);
        setClf('');
        setError(false);
        setImc(0);
    }, []);

    const handleClickRadio = useCallback((male: boolean) => {
        setIsMale(male);
        setIsFemale(!male);
    },[]);

    const calculateImc = useCallback(() => {

        let numberHeight = parseFloat(height);
        const numberWeight = parseFloat(weight);

        numberHeight = numberHeight / 100;

        const error = validadeData(height, weight, isFemale, isMale);
        setError(error);

        if(!error){
            const imcCount = ((numberWeight) / (numberHeight * numberHeight));
            const imcFormatted = parseFloat(imcCount.toFixed(2));
            setImc(imcFormatted);

            if(imcFormatted < 17){
                setClf('Muito abaixo do peso ideal!');
            } else if(imcFormatted <= 18.49){
                setClf('Abaixo do peso!');
            } else if(imcFormatted < 25){
                setClf('Peso normal!');
            } else if(imcFormatted < 30){
                setClf('Acima do peso!');
            } else if(imcFormatted < 35){
                setClf('Obesidade grau 1!');
            } else if(imcFormatted < 40){
                setClf('Obesidade grau 2!');
            } else {
                setClf('Obesidade grau 3 (mórbida)!');
            }
        } else {
            alert("Falta os preencher algum campo!");
        }

    }, [validadeData, height, weight, isFemale, isMale]);

    return(
        <Container>
            <Grid>
            <Label>Sexo:</Label>
                <RadioContainer>
                    <Radio 
                        name="radio-male"
                        label="Homem"
                        isChecked={isMale}
                        handleClick={() => handleClickRadio(true)}
                    />

                    <Radio 
                        name="radio-female"
                        label="Mulher"
                        isChecked={isFemale}
                        handleClick={() => handleClickRadio(false)}
                    />
                </RadioContainer>
                <Label>Altura: </Label>
                <Input 
                id="height-input"
                value={height}
                placeholder="Centímetros"
                handleChange={setHeight}
                />

                <Label>Peso: </Label>
                <Input 
                id="weight-input"
                value={weight}
                placeholder="Quilos"
                handleChange={setWeight}
                />
            </Grid>
            <ContainerButton>
                <Button
                id="calcular-imc"
                handleClick={calculateImc}
                >
                    Enviar
                </Button>
                <Button
                id="limpar-imc"
                handleClick={cleanInput}
                >
                    Limpar
                </Button>
            </ContainerButton>
            {(imc && !error)?(
                <>
                <Result>
                    O IMC é de: {imc}
                    <br></br>
                    {clf}
                </Result>
                </>
            ): null}
        </Container>
    );
}

export default ImcResult;