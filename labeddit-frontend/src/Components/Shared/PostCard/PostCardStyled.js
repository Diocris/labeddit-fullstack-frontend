import { css, styled } from "styled-components";

export const PostCardStyled = styled.article`
border: 1px solid #E0E0E0;
padding: 0.5em;
margin-bottom: 1em;
border-radius: 0.75em;
background-color: #FBFBFB;
`

export const PostCreatorStyled = styled.p`
font-size: 14px;
position: relative;
top: 0%;
left: 0%;
width: fit-content;
margin: 0;
`

export const PostContent = styled.p`
text-align: initial;
`

export const PostInteractivesHolder = styled.div`
display: inline-flex;
justify-content: space-evenly;
column-gap: 1em;
`

export const InteractiveHolder = styled.div`
display: inline-flex;
border-radius: 0.75em;
border: 1px solid #E0E0E0;
column-gap: 0.5em;
align-items: center;
padding: 0 0.5em
`
export const AnchorStyled = styled.a`
display: flex;
align-self: center;
justify-self: center;
margin: 0.25em 0.5em;
`

export const IconSVGStyled = styled.svg`
height: 100%;
`
export const IconSVGPath = styled.path`
${props => props.$variant === '$primary' ? css`fill: green;stroke: none` :
            props.$variant === '$secondary' ? css`fill: red; stroke: none` :
             props.$variant === '$neutral' ? css`fill: none` : css``


} 

`

export const NumInfo = styled.span`
font-size: 10px;
margin: 1em 0.5em;
font-weight: 800;
width: 10px;
max-width: 10px;
`