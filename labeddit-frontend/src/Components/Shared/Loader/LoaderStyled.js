import { styled } from "styled-components";

export const LoaderHolder = styled.div`
width: 100vw;
height: 100vh;
position: absolute;
top: 0%;
left: 0%;
z-index: 999;
background-color: #ffffff;
`

export const LoaderGif = styled.img`
position: relative;
top: 50%;
left:50%;
transform: translate(-50%, -50%);
`