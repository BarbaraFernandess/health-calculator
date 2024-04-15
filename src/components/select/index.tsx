import React from "react";
import { SelectElement, SelectOption } from "./index.styled";

export interface SelectItem{
    label: string;
    value: string;
}
interface SelectProps{
    id: string;
    value: SelectItem;
    handleClick: (item: SelectItem) => void;
    options: SelectItem[];
}


const Select: React.FC<SelectProps> = ({
    id, value, handleClick, options
}) => {
    return(
        <SelectElement id={id}>
            {options.map(op => (
                <SelectOption
                value={op.value}
                selected={value.value === op.value}
                onClick={() => handleClick(op)}
                >
                    {op.label}

                </SelectOption>
            ))}
        </SelectElement>
    );
}

export default Select;