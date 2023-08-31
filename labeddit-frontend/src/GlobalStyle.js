import { createGlobalStyle, styled } from "styled-components";

export const GlobalStyle = createGlobalStyle`
#root section:not(.login-screen, .signup-screen){   
    @media (min-width: 768px) {
        min-width: calc(768px - 2em);
        width: 50%;
        position: relative;
        left: 50%;
        transform: translate(-50%);

    }
}
body, html{
padding: 0px;
margin: 0px;
box-sizing: border-box;
min-width: 360px;
}

body{
    align-self: center !important;
    justify-self: center !important;
}

p,h1,h2,h3,h4{
color: #000;
text-align: center;
font-size: 1rem;
font-style: normal;
font-weight: 300;
line-height: normal;
}

h1{
    font-size: calc(2rem + 4vw);
    margin: 0;
}

button{
    font-size: calc(1rem + 0.2vw);
}
`
