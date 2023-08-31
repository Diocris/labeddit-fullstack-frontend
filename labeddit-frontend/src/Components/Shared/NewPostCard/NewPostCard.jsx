import { useContext, useState } from "react";
import Button from "../Button/Button";
import Separator from "../Separator/Separator";
import { PostWriteAreaStyled, TextAreaStyled } from "./NewPostCardStyle";
import axios from "axios"
import {BASE_API_POSTS} from "../../../Constants/constants"
import ErrorMessagePrint from "../ErrorMessage/ErrorMessagePrint";
import SuccessMessage from "../SuccessMessage/SuccessMessage";
import { AppContext } from "../../../Context/GlobalContext";

export default function NewPostArea() {
    const {setRefresh} = useContext(AppContext)
    const [errorPrint, setErrorPrint] = useState("")
    const [successPrint, setSuccessPrint] = useState("")

    const token = JSON.parse(localStorage.getItem("token"))
    const headers = {
        Authorization: token
    }
    const [content, setContent] = useState("")

    const fillContent= (e)=>{
        const {value} = e.target
        setContent(value)
    }
    const body ={
        "content": String(content)
    }

    function CreatePost() {
         axios.post(BASE_API_POSTS,body, {headers} )
         .then((response)=>{
           
            setSuccessPrint("Posted.")
            setTimeout(() => {
                setSuccessPrint("")
            }, 2000);
            setRefresh(prevRefresh => !prevRefresh);
         })
         .catch((error)=>{
            setErrorPrint(error.response.data[0].message || error.response.data)
            setTimeout(() => {
                setErrorPrint("")
            }, 2000);
         })
         setContent("")
    }
   

    return(<>
    <PostWriteAreaStyled>
        
        <TextAreaStyled type={"text-area"} name="comment" placeholder={"Share your toughts with your friends."} alt={"Comment text-area."} value={content} onChange={fillContent}/>
        
        {errorPrint !== "" ? <ErrorMessagePrint text={errorPrint}/> : successPrint !== "" && <SuccessMessage text={successPrint}/>}
    
        <Button text={"Post"} $variant={'$primary'} event={CreatePost}/>    
        
        <Separator/>
        
    </PostWriteAreaStyled>
    </>)
}