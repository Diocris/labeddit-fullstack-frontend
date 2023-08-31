import { styled } from "styled-components"

export const NavbarStyled = styled.nav`
    width: 100vw;
    height: 44px;
    background-color: #EDEDED;
    position: relative;
    top: 0%;
    left: 0%;
    padding: 0.5em 0;
    display: flex;
    justify-content: space-between;
    button, a{
        width: fit-content !important;
        float: right;    
        padding: 0 1em !important;
        min-width: 110px;
        height: 100%;
        
    }
    a{
        display: flex;
    align-items: center;
    }
`

export const LogoStyled = styled.img`
  height: 100%;
        position: relative;
        
`

export const DivHolder = styled.div`
width: 100%;
display: flex;
align-items: center;
&:nth-of-type(1){
    justify-content: flex-start;
}
&:nth-of-type(2){
    justify-content: center;
}
&:nth-of-type(3){
    justify-content: flex-end;
}

`