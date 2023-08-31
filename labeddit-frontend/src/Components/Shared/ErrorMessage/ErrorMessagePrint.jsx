import {ErrorMessageStyled} from "./ErrorMessagePrintStyled"


export default function ErrorMessagePrint(props) {
    return(<ErrorMessageStyled>{props.text}</ErrorMessageStyled>)
}