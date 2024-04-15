import React, { PropsWithChildren } from "react";
import { DivElement } from "./index.styled";

const Result: React.FC<PropsWithChildren> = ({children}) =>{
    return (
        <DivElement>
            {children}
        </DivElement>
    );
}

export default Result;