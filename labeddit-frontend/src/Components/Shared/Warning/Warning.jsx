import { WarningStyled, WarningText } from "./WarningStyled";

export default function Warning({text}) {
    return <WarningStyled>
        <WarningText>{text}</WarningText>
        
    </WarningStyled>
}