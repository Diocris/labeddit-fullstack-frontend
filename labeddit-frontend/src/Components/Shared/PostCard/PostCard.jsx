import { AnchorStyled, IconSVGPath, IconSVGStyled, InteractiveHolder, NumInfo, PostCardStyled, PostContent, PostCreatorStyled, PostInteractivesHolder } from "./PostCardStyled";
import axios from "axios"
import { BASE_API_POSTS } from "../../../Constants/constants";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../Context/GlobalContext";
import { goToPost } from "../../../Routes/coordinator";
import { useNavigate } from "react-router-dom";
export default function PostCard({ id, creator, content, likes, comments,setErrorPrint }) {
    
    const {refresh, setRefresh} = useContext(AppContext)
    
    const navigate = useNavigate()
    
    const token = JSON.parse(localStorage.getItem("token"))
    
    const headers = {
        Authorization: token
    }

  

    const likePost = () => {
        const body = {
            "like": Boolean(true)
        }
        axios.post(BASE_API_POSTS + "/" + id + "/like", body, { headers })
            .then((response) => {
                setRefresh(prevRefresh => !prevRefresh);
            })
            .catch((error) => {
                setErrorPrint(error.response.data)
                setTimeout(() => {
                    setErrorPrint("")
                }, 3000);
            })
           
    }

    const dislikePost = () => {
        const body = {
            "like": Boolean(false)
        }

        axios.post(BASE_API_POSTS + "/" + id + "/like", body, { headers })
            .then((response) => { 
                setRefresh(prevRefresh => !prevRefresh);
            })
            .catch((error) => {
                setErrorPrint(error.response.data)
                setTimeout(() => {
                    setErrorPrint("")
                }, 3000);
            })
       
    }

    
    const [interactLike, setInteractLike] = useState({like: false, dislike: false})
  

    const getLikes = () =>{
        axios.get(BASE_API_POSTS+"/"+id+"/like", {headers})
        .then((response)=>{
            const like = response.data[0]
            if(like){
                if(like.like === 1){
                    setInteractLike({like: true, dislike: false})
                }else if(like.like === 0){
                    setInteractLike({like: false, dislike: true})
                }
            }else{
                setInteractLike("$neutral")
            }
           
        })
        .catch((error)=>{
            console.log(error.response.data)
        })
        
    }
    

    useEffect(()=>{
        getLikes()
        // eslint-disable-next-line
    },[refresh])

    const openPost = ()=>{
        goToPost(navigate, id)
    }
    
    return (
        <PostCardStyled key={id}>
        
          
            <PostCreatorStyled>Posted by: {creator}</PostCreatorStyled>

            <PostContent>{content}</PostContent>

            <PostInteractivesHolder>

                <InteractiveHolder name="Likes holder.">
                    <AnchorStyled onClick={likePost}>
                        <IconSVGStyled  xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ rotate: '180deg' }}>
                            <g clipPath="url(#clip0_12018_238)">
                            { <IconSVGPath $variant={interactLike.like === true ?'$primary' : '$neutral'} d="M8.81714 16.9565L8.81715 16.9565C9.35039 17.627 10.3691 17.6259 10.9011 16.9542L8.81714 16.9565ZM8.81714 16.9565L3.70956 10.5352L3.7095 10.5351C3.20091 9.89597 3.65094 8.95099 4.46805 8.94299L4.46813 8.94299L5.85582 8.92918C6.12995 8.92646 6.35077 8.70349 6.35085 8.42934L6.35208 3.76468L6.35208 3.76466C6.35212 3.58992 6.38658 3.41691 6.45351 3.2555C6.52044 3.09409 6.61852 2.94746 6.74214 2.82397C6.86576 2.70048 7.01251 2.60256 7.17399 2.5358C7.33547 2.46905 7.50852 2.43477 7.68325 2.43492L12.0414 2.43886C12.3938 2.43927 12.7317 2.57956 12.9808 2.82892C13.2299 3.07828 13.3698 3.41632 13.3699 3.76878L13.3699 3.76879L13.3704 8.42828C13.3704 8.70429 13.5941 8.92807 13.8701 8.92822L15.2255 8.92896C15.2255 8.92896 15.2255 8.92896 15.2255 8.92896C16.0461 8.92947 16.5038 9.8764 15.9949 10.5196C15.9949 10.5196 15.9949 10.5196 15.9948 10.5197L10.9012 16.9542L8.81714 16.9565Z" stroke="#6F6F6F"  />}
                                
                            </g>
                        </IconSVGStyled>
                    </AnchorStyled>

                    <NumInfo>{likes}</NumInfo>

                    <AnchorStyled onClick={dislikePost}>
                        <IconSVGStyled xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <g clipPath="url(#clip0_12018_238)">
                            {<IconSVGPath $variant={interactLike.dislike === true ?'$secondary' : '$neutral'} d="M8.81714 16.9565L8.81715 16.9565C9.35039 17.627 10.3691 17.6259 10.9011 16.9542L8.81714 16.9565ZM8.81714 16.9565L3.70956 10.5352L3.7095 10.5351C3.20091 9.89597 3.65094 8.95099 4.46805 8.94299L4.46813 8.94299L5.85582 8.92918C6.12995 8.92646 6.35077 8.70349 6.35085 8.42934L6.35208 3.76468L6.35208 3.76466C6.35212 3.58992 6.38658 3.41691 6.45351 3.2555C6.52044 3.09409 6.61852 2.94746 6.74214 2.82397C6.86576 2.70048 7.01251 2.60256 7.17399 2.5358C7.33547 2.46905 7.50852 2.43477 7.68325 2.43492L12.0414 2.43886C12.3938 2.43927 12.7317 2.57956 12.9808 2.82892C13.2299 3.07828 13.3698 3.41632 13.3699 3.76878L13.3699 3.76879L13.3704 8.42828C13.3704 8.70429 13.5941 8.92807 13.8701 8.92822L15.2255 8.92896C15.2255 8.92896 15.2255 8.92896 15.2255 8.92896C16.0461 8.92947 16.5038 9.8764 15.9949 10.5196C15.9949 10.5196 15.9949 10.5196 15.9948 10.5197L10.9012 16.9542L8.81714 16.9565Z" stroke="#6F6F6F"  />}
                            </g>
                    
                        </IconSVGStyled>
                    </AnchorStyled>
                </InteractiveHolder>

                <InteractiveHolder onClick={openPost} name="Comments holder.">
                    <AnchorStyled onClick={openPost}>
                        <IconSVGStyled xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
                            <IconSVGPath d="M10.1147 13.5859H14.7067C15.543 13.5859 16.2001 12.9204 16.2001 12.1243V5.86161C16.2001 5.06547 15.543 4.40001 14.7067 4.40001H4.62672C3.79046 4.40001 3.13339 5.06547 3.13339 5.86161V12.1243C3.13339 12.9204 3.79046 13.5859 4.62672 13.5859H6.12006V16.5333H6.12286L6.12472 16.5324L10.1157 13.5859H10.1147ZM6.68006 17.2828C6.48137 17.4293 6.23312 17.4919 5.98874 17.4571C5.74437 17.4224 5.52339 17.2931 5.37339 17.0971C5.25314 16.9387 5.18792 16.7453 5.18766 16.5464V14.5192H4.62766C3.28739 14.5192 2.20099 13.4468 2.20099 12.1243V5.86161C2.20006 4.53907 3.28646 3.46667 4.62672 3.46667H14.7067C16.047 3.46667 17.1334 4.53907 17.1334 5.86161V12.1243C17.1334 13.4477 16.047 14.5192 14.7067 14.5192H10.4227L6.67912 17.2828H6.68006Z" fill="#6F6F6F" />
                        </IconSVGStyled>


                    </AnchorStyled>
                    <NumInfo>{comments}</NumInfo>
                </InteractiveHolder>
            </PostInteractivesHolder>
        </PostCardStyled>
    )
}