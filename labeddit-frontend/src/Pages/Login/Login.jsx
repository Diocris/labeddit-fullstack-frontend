import { LoginForm, LoginStyled, LogoImageStyled, LogoStyled, SloganStyled } from "./LoginStyled";
import logo from "../../assets/logo.png"


export default function Login (){
    return(<>
    <LoginStyled>
        <LogoStyled>
            <LogoImageStyled src={logo}/> 
            <SloganStyled>O projeto de rede social da Labenu</SloganStyled>
        </LogoStyled>
        <LoginForm>
            <input type="text" placeholder="Email"></input>
            <input type="text" placeholder="Password"></input>
        </LoginForm>
    </LoginStyled>
    </>)
}