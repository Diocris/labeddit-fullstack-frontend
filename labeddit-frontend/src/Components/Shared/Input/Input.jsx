import { InputSyled } from "./InputStyled";

export default function Input({type,name, placeholder,alt,event, value, checked}) {
    return(<>
        <InputSyled type={type} 
        name={name}
        placeholder={placeholder}
        alt={alt}
        onChange={event}
        value={value}
        autoComplete="off"
        checked={checked}
        />
    </>)
}