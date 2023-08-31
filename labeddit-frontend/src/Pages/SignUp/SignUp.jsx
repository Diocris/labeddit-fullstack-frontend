import Input from "../../Components/Shared/Input/Input"
import Button from "../../Components/Shared/Button/Button"
import { SignUpForm, SignUpStyled } from "./SignUpStyled";
import { useState } from "react";
import axios from "axios";
import { BASE_API_URL } from "../../Constants/constants";
import ErrorMessagePrint from "../../Components/Shared/ErrorMessage/ErrorMessagePrint";
import SuccessMessage from "../../Components/Shared/SuccessMessage/SuccessMessage";

export default function SignUp(){
    const initialFormState = {name: "", email: "", password: "", newsletter: false}
    const [form, setForm] = useState(initialFormState)
    const [errorPrint, setErrorPrint] = useState("")
    const [successPrint, setSucessPrint] = useState("")
    
    
    const fillForm = (e) => {
        const { name, value, type, checked} = e.target;
        const inputValue = type === "checkbox" ? checked : value;
        setForm({ ...form, [name]: inputValue });
    };
    
    function signUp(e) {
        e.preventDefault()
        setErrorPrint("")
        const body = {
            name:form.name,
            email: form.email,
            password: form.password
        }
        
        axios.post(BASE_API_URL+"/signup", body)
        .then(
            (response)=>{
                setSucessPrint(response.data.message)
                setForm({...initialFormState})
            }
            
        )
        .catch((error) => {
            setErrorPrint(error.response.data[0].message || error.response.data)
            setForm({...initialFormState})
  
            })
        
    }
    
    return(<>
    <SignUpStyled className="signup-screen">
        <h1>Welcome to Labeddit.</h1>
        <SignUpForm>
        <Input type="text" name="name" placeholder="Nickname" alt="Name input." event={fillForm} value={form.name}/>
        <Input type="email" name="email" placeholder="E-mail" alt="E-mail input." event={fillForm} value={form.email}/>
        <Input type="password" name="password" placeholder="Password" alt="Password input." event={fillForm} value={form.password}/>
        </SignUpForm>
        {errorPrint !== "" ? <ErrorMessagePrint text={errorPrint}/> : successPrint !== "" && <SuccessMessage text={successPrint}/>}
        <div>
        <p style={{textAlign: "start"}}>By continuing, you agree to our User Agreement and our Privacy Policy.</p>
        <label htmlFor="newsletter">
                <Input
                    type="checkbox"
                    name="newsletter"
                    alt="Newsletter check-box."
                    event={fillForm}
                    value={form.newsletter}
                    checked={form.newsletter}
                />
                I agree to receive emails about cool things on Labeddit.
        </label>        </div>
        <Button text="Register" $variant="$primary" event={signUp} />
    </SignUpStyled>
    </>)
}