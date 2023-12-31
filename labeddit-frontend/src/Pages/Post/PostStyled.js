import { styled } from "styled-components";

export const PostStyled = styled.section`
padding: 1em;

`

export const CommentsHolder = styled.section`

`


export const CommentWriteAreaStyled = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;
    
`

export const CommentAreaStyled = styled.textarea`
min-height: 80px;
overflow-x: scroll;
background-color: #FBFBFB;
border: 1px solid #E0E0E0;
border-radius: 0.75em;
word-wrap: break-word !important;
white-space: pre-line;
padding: 0.5em;
color: #6F6F6F;
font-family: Helvetica;
font-size: 1em;
font-style: normal;
font-weight: 400;
line-height: normal;
resize: none;
`