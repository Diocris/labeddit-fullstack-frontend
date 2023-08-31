import { styled, css } from "styled-components";

export const ButtonStyled = styled.button`
    padding: 1.1em 1em;
    border: none;
    background-color: transparent;
    border-radius: 2em;
    width: 100%;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    ${props => props.$variant === '$primary' && css`
      background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
      color: white;
    ` }
        
    ${props => props.$variant === '$secundary' && css`
      border: 1px solid rgba(254, 126, 2, 1);
      color: rgba(254, 126, 2, 1);
    ` }
    img{
      margin: 0 1em;
      float: left
    }
`