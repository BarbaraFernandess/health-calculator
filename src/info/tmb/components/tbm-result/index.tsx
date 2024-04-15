import React, { useCallback, useState } from "react";
import { Container, ContainerButton, Grid, Label, RadioContainer } from "./index.styles";
import Radio from "../../../../components/radio";
import Input from "../../../../components/input";
import Select, { SelectItem } from "../../../../components/select";
import Button from "../../../../components/button";
import Result from "../../../result-div";


interface Activity extends SelectItem {
    taxa?: number;
}


const activityOptions: Activity[] = [
    {value: "op1", taxa: 1.200, label: "Sedentário"},
    {value: "op2", taxa: 1.375, label: "Baixo"},
    {value: "op3", taxa: 1.550, label: "Moderado"},
    {value: "op4", taxa: 1.725, label: "Alto"},
    {value: "op5", taxa: 1.900, label: "Muito Alto"},
];

const TmbResult: React.FC = () =>{
    const [isMale, setIsMale] = useState<boolean>(false);
    const [isFemale, setIsFemale] = useState<boolean>(false);
    const [height, setHeight] = useState<string>("");
    const [weight, setWeight] = useState<string>("");
    const [age, setAge] = useState<string>("");
    const [calories, setCalories] = useState<number>();
    const [tmb, setTmb] = useState<number>();
    const [activity, setActivity] = useState<Activity>(activityOptions[0]);
    const [error, setError] = useState<boolean>(false);

    
    const handleClickRadio = useCallback((male: boolean) => {
        setIsMale(male);
        setIsFemale(!male);
    },[]);

    const validadeData = useCallback((
        age: string, 
        height: string, 
        weight: string, 
        isFemale: boolean, 
        isMale: boolean
    ): boolean => {
        return height === '' || weight === '' || age === '' || (!isFemale && !isMale)
    }, []);

    const calculateTmb = useCallback(() => {

        const error = validadeData(age, height, weight, isFemale, isMale);
        setError(error);

        if(!error){
            const numberHeight = parseFloat(height);
            const numberWeight = parseFloat(weight);
            const numberAge = parseInt(age);

            const ew = isFemale
                ? [447.593, 9.247, 3.098, 4.330]
                : [88.362, 13.397, 4.799, 5.677];
            const taxa = activity?.taxa || 0;

            const tmb = Math.ceil(ew[0] + (ew[1]*numberWeight) + (ew[2]*numberHeight) - (ew[3]*numberAge));
            setTmb(tmb);

            setCalories(tmb*taxa);
        } else {
            alert("Falta os preencher algum campo!");
        }

    }, [validadeData, age, height, weight, isFemale, isMale, activity?.taxa]);

    const cleanInput = useCallback(() =>{
        setWeight("");
        setAge("");
        setHeight("");
        setTmb(0);
        setCalories(0);

    }, []);


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
                id="input-height"
                value={height}
                placeholder = "Centímetros"
                handleChange={setHeight}
                />

                <Label>Peso: </Label>
                <Input 
                id="input-weight"
                value={weight}
                placeholder = "Quilos"
                handleChange={setWeight}
                />

                <Label>Idade: </Label>
                <Input 
                id="input-age"
                type="number"
                value={age}
                placeholder = "Anos"
                handleChange={setAge}
                />

                <Label>Atividade:</Label>
                <Select
                id="select-activity"
                value={activity}
                handleClick={setActivity}
                options={activityOptions}
                />
            </Grid>
            <ContainerButton>
                <Button
                id="calcular-tmb"
                handleClick={calculateTmb}
                >
                Enviar
                </Button>
                <Button
                id="limpar"
                handleClick={cleanInput}
                >
                    Limpar
                </Button>
            </ContainerButton>
            {(tmb && !error)?
            <>
             <Result>
                    Taxa metabólica basal: {tmb}
                    <br></br>
                    Gasto calórico total: {calories} 
                </Result>
            </>
            : null}
        </Container>
    );
}

export default TmbResult;
