import React, { PropsWithChildren } from "react";
import { ButtonElement } from "./index.styled";

interface ButtonProps {
    id: string;
    handleClick: () => void;
}
const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
    id, handleClick, children
}) => {
    return(
        <ButtonElement
            id={id}
            onClick={handleClick}
        >
            {children}
        </ButtonElement>
    );
}

export default Button;
