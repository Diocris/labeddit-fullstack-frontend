import {styled} from 'styled-components'

export const LoginStyled = styled.section`
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    overflow-y: hidden;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%);
    padding: 1em;
    @media (min-width:462px ) {
        max-width: 25vw;
        min-width: 360px;
    }
`

export const LogoStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`

export const LogoImageStyled = styled.img`
    width: 60%;
`
export const SloganStyled = styled.p`
    width: 100%;
    height: fit-content;
    align-self: center;
    margin: 0;
`

export const LoginForm = styled.form`
width: 100%;
display: flex;
flex-direction: column;
row-gap: 0.5em;
margin: 1em 0;
`
export const ButtonHolderDiv = styled.div`
width: 100%;
`
