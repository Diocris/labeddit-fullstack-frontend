import { useContext, useEffect, useState } from "react";
import { AnchorStyled, CommentCardStyled, CommentContent, CommentCreatorStyled, IconSVGPath, IconSVGStyled, InteractiveHolder, NumInfo } from "./CommentCardStyled";
import { AppContext } from "../../../Context/GlobalContext";
import axios from "axios";
import { BASE_API_POSTS } from "../../../Constants/constants";

export default function CommentCard({postId, commentId, commentUserName, commentContent, commentLikes }) {

    const { refresh, setRefresh } = useContext(AppContext)
    const token = JSON.parse(localStorage.getItem("token"))
    const [interactLike, setInteractLike] = useState({ like: false, dislike: false })
    
    const headers = {
        Authorization: token
    }
 
    const getLikes = () =>{
        axios.get(BASE_API_POSTS+"/"+postId+"/comments/"+commentId, {headers})
        .then((response)=>{

            const like = response.data[0]
            if(like){
                if(like.like === 1){
                    setInteractLike({like: true, dislike: false})
                }else if(like.like === 0){
                    setInteractLike({like: false, dislike: true})
                }
                console.log(interactLike)
            }else{
                setInteractLike("$neutral")
            }

        })
        .catch((error)=>{
            console.log(error.response.data)
        })

    }


    useEffect(() => {
        getLikes()
        // eslint-disable-next-line
    }, [refresh])
    
    const likeComment = ()=>{
        const body={
            "like": true
        }
        axios.post(BASE_API_POSTS+"/"+postId+"/comments/"+commentId,body, {headers})
        .then((response)=>{
            setRefresh(prevRefresh => !prevRefresh);
        })
        .catch((error)=>{
            console.log(error.response)
        })
    }
    
    const dislikeComment = ()=>{
        const body={
            "like": false
        }
        axios.post(BASE_API_POSTS+"/"+postId+"/comments/"+commentId,body, {headers})
        .then((response)=>{
            setRefresh(prevRefresh => !prevRefresh);
        })
        .catch((error)=>{
            console.log(error.response)
        })
       
    }

    return (
        <CommentCardStyled key={commentId}>
            
            <CommentCreatorStyled>Posted by: {commentUserName}</CommentCreatorStyled>
            
            <CommentContent>{commentContent}</CommentContent>
            
            <InteractiveHolder name="Likes holder.">

                <AnchorStyled onClick={likeComment}>
                    <IconSVGStyled xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ rotate: '180deg' }}>
                        <g clipPath="url(#clip0_12018_238)">
                            {<IconSVGPath $variant={interactLike.like === true ?'$primary' : '$neutral'} d="M8.81714 16.9565L8.81715 16.9565C9.35039 17.627 10.3691 17.6259 10.9011 16.9542L8.81714 16.9565ZM8.81714 16.9565L3.70956 10.5352L3.7095 10.5351C3.20091 9.89597 3.65094 8.95099 4.46805 8.94299L4.46813 8.94299L5.85582 8.92918C6.12995 8.92646 6.35077 8.70349 6.35085 8.42934L6.35208 3.76468L6.35208 3.76466C6.35212 3.58992 6.38658 3.41691 6.45351 3.2555C6.52044 3.09409 6.61852 2.94746 6.74214 2.82397C6.86576 2.70048 7.01251 2.60256 7.17399 2.5358C7.33547 2.46905 7.50852 2.43477 7.68325 2.43492L12.0414 2.43886C12.3938 2.43927 12.7317 2.57956 12.9808 2.82892C13.2299 3.07828 13.3698 3.41632 13.3699 3.76878L13.3699 3.76879L13.3704 8.42828C13.3704 8.70429 13.5941 8.92807 13.8701 8.92822L15.2255 8.92896C15.2255 8.92896 15.2255 8.92896 15.2255 8.92896C16.0461 8.92947 16.5038 9.8764 15.9949 10.5196C15.9949 10.5196 15.9949 10.5196 15.9948 10.5197L10.9012 16.9542L8.81714 16.9565Z" stroke="#6F6F6F" />}
                        </g>
                    </IconSVGStyled>
                    
                </AnchorStyled>

                <NumInfo>{commentLikes}</NumInfo>

                <AnchorStyled onClick={dislikeComment}>
                    <IconSVGStyled xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <g clipPath="url(#clip0_12018_238)">
                            {<IconSVGPath $variant={interactLike.dislike === true ?'$secondary' : '$neutral'} d="M8.81714 16.9565L8.81715 16.9565C9.35039 17.627 10.3691 17.6259 10.9011 16.9542L8.81714 16.9565ZM8.81714 16.9565L3.70956 10.5352L3.7095 10.5351C3.20091 9.89597 3.65094 8.95099 4.46805 8.94299L4.46813 8.94299L5.85582 8.92918C6.12995 8.92646 6.35077 8.70349 6.35085 8.42934L6.35208 3.76468L6.35208 3.76466C6.35212 3.58992 6.38658 3.41691 6.45351 3.2555C6.52044 3.09409 6.61852 2.94746 6.74214 2.82397C6.86576 2.70048 7.01251 2.60256 7.17399 2.5358C7.33547 2.46905 7.50852 2.43477 7.68325 2.43492L12.0414 2.43886C12.3938 2.43927 12.7317 2.57956 12.9808 2.82892C13.2299 3.07828 13.3698 3.41632 13.3699 3.76878L13.3699 3.76879L13.3704 8.42828C13.3704 8.70429 13.5941 8.92807 13.8701 8.92822L15.2255 8.92896C15.2255 8.92896 15.2255 8.92896 15.2255 8.92896C16.0461 8.92947 16.5038 9.8764 15.9949 10.5196C15.9949 10.5196 15.9949 10.5196 15.9948 10.5197L10.9012 16.9542L8.81714 16.9565Z" stroke="#6F6F6F" />}
                        </g>
                    </IconSVGStyled>
                </AnchorStyled>
                
            </InteractiveHolder>
            
        </CommentCardStyled>
    )
}