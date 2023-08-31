import {styled} from 'styled-components'
export const SignUpStyled = styled.section`
    max-height: 88vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    overflow-y: hidden;
    position: relative;
    top: 50%;
    left: 50%;
    padding: 1em;
    row-gap: 1em;
    transform: translate(-50%);
    @media (min-width:462px ) {
        max-width: 25vw;
        min-width: 360px;
    }
`

export const SignUpForm = styled.form`
width: 100%;
display: flex;
flex-direction: column;
row-gap: 0.5em;
margin: 1em 0;
`