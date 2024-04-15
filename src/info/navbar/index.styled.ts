import styled from "styled-components";
import { colors } from "../../components/theme/theme";

export const NAV_HEIGHT = "5rem";

export const NavBarContainer = styled.nav`
    display: flex;
    position: fixed;
    justify-content: space-around;
    top: 0;
    left: 0;
    width: 100vw;
    height: ${NAV_HEIGHT};
    transition: 2s;
    background-color: ${colors.mainColor};
`;

export const NavBarContent = styled.span`
    color: white;
    display: flex;
    align-items: center;
    text-decoration: none;
`;

export const LinkContent = styled.a`
     text-decoration: none;
     color: white;
`;