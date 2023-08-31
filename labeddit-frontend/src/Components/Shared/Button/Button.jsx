import { ButtonStyled } from "./ButtonStyled"

export default function Button(props) {

    return(<>
    <ButtonStyled onClick={props.event} $variant={props.$variant}>
        {props.text ? props.text : <img src={props.image}/>}
        </ButtonStyled>
    </>)
}