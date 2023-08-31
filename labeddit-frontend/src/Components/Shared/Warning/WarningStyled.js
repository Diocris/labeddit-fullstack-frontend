import { styled } from "styled-components";

export const WarningStyled = styled.div`
width: 100%;
position: fixed;
bottom: 0%;
left: 0%;
z-index: 2;
height: 40px;
background-color: #FDC8C8;
box-shadow: 1px 1px 1px 1px #EBEBEB;
text-align: center;
display: grid;
    align-items: center;
    align-content: center;
opacity: 0;
animation: fadeOut 2s ease-out;

@keyframes fadeOut {
    0%{
        opacity: 1;
    }
    90%{
        opacity: 1;
    }
    100%{
        opacity: 0;
    }
}
`

export const WarningText = styled.p`
color: red;
font-size: 14px;
position: relative;

`