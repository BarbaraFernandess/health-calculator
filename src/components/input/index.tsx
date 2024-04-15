import React from "react";
import { TextInput } from "./index.styled";

type Event = React.ChangeEvent<HTMLInputElement>;

interface InputProps{
    id: string;
    value: string;
    handleChange: (e: string) => void;
    placeholder?: string;
    type?: string;
}

const Input: React.FC<InputProps> = ({id, value, handleChange, placeholder, type="text"}) =>{
    return(
        <TextInput 
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={(e: Event) => handleChange(e.target.value)}
        />

    );
}

export default Input;