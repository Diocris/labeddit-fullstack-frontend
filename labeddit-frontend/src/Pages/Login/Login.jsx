import { ButtonHolderDiv, LoginForm, LoginStyled, LogoImageStyled, LogoStyled, SloganStyled } from "./LoginStyled";
import logo from "../../assets/logo.png"
import Input from "../../Components/Shared/Input/Input";
import Button from "../../Components/Shared/Button/Button";
import Separator from "../../Components/Shared/Separator/Separator";
import { useContext, useEffect, useState } from "react";
import { BASE_API_URL } from "../../Constants/constants";
import axios from 'axios'
import { AppContext } from "../../Context/GlobalContext";
import { goToHome, goToSignUp } from "../../Routes/coordinator";
import { useNavigate } from "react-router-dom";
import ErrorMessagePrint from "../../Components/Shared/ErrorMessage/ErrorMessagePrint";
import Loader from "../../Components/Shared/Loader/Loader";



export default function Login() {

    const { loggedIn, setLoggedIn } = useContext(AppContext)

    const initialFormState = { email: "", password: "" };

    const [form, setForm] = useState(initialFormState)

    const navigate = useNavigate()

    const [errorPrint, setErrorPrint] = useState("")

    const [load, setLoad] = useState(false)


    useEffect(() => {

        setTimeout(() => {
            if (loggedIn) {
                setLoad(true)
                setTimeout(() => {
                    goToHome(navigate)
                }, 300);
            }
        }, 100);

    }, [loggedIn, navigate])


    const fillForm = (e) => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }


    function login(e) {
        e.preventDefault()

        const body = {
            email: form.email,
            password: form.password
        }

        axios.post(BASE_API_URL + "/login", body)
            .then(
                (response) => {

                    const result = response.data

                    const token = result.token

                    const tokenString = JSON.stringify(token)
                    localStorage.setItem('token', tokenString)

                    localStorage.setItem('isLogged', true)
                    setLoggedIn(true)

                    setForm({ email: "", password: "" })

                    setTimeout(() => {
                        goToHome(navigate)
                    }, 300);

                }
            )
            .catch((error) => {

                setErrorPrint(error.response.data[0].message || error.response.data)

                setForm(initialFormState)

            })
    }



    return (<>
        {load
            ? <Loader />

            : <LoginStyled className="login-screen">

                <LogoStyled>

                    <LogoImageStyled src={logo} />

                    <SloganStyled>The social network project of Labenu</SloganStyled>

                </LogoStyled>

                <LoginForm>

                    <Input name="email" type="email" placeholder="Email" event={fillForm} alt={"Email input."} value={form.email} />

                    <Input name="password" type="password" placeholder="Password" event={fillForm} alt={"Password input."} value={form.password}></Input>

                </LoginForm>

                {errorPrint !== "" && <ErrorMessagePrint text={errorPrint} />}

                <ButtonHolderDiv>

                    <Button text={"Login"} $variant={"$primary"} event={login} />

                    <Separator />

                    <Button text={"Sign Up"} $variant={"$secundary"} event={() => goToSignUp(navigate)} />

                </ButtonHolderDiv>

            </LoginStyled>
        }

    </>)
}