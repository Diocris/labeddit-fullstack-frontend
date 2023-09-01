import { styled } from "styled-components";

export const ErrorMessageStyled = styled.p`
color: red;
font-size:12px;
animation: fadeOut 3s ease-in;
opacity: 0;

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