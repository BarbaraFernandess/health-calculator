import React from "react";
import { LinkContent, NavBarContainer, NavBarContent } from "./index.styled";


const NavBar: React.FC = () =>{
    return(
        <NavBarContainer>
            <NavBarContent>
                <LinkContent href="#tmb-container">
                    O que é taxa metabólica? Como calcular?
                </LinkContent>
            </NavBarContent>
            <NavBarContent>
            <LinkContent href="#imc-container">
                    O que é índice de massa corporal? Como calcular?
                </LinkContent>
            </NavBarContent>
        </NavBarContainer>
    );
}

export default NavBar;