import React from "react";
import { RadioContainer, RadioInput, RadioLabel } from "./index.styled";

interface RadioProps{
    name: string;
    label: string;
    isChecked?: boolean;
    handleClick: () => void;
}
const Radio: React.FC<RadioProps> = ({
    name, label, isChecked, handleClick
}) =>{
    return(
        <RadioContainer>
            <RadioLabel htmlFor={name}>
                {label}
            </RadioLabel>
            <RadioInput 
            id = {name} 
            checked={isChecked}
            onClick={handleClick}
            />
        </RadioContainer>
    );
}

export default Radio;