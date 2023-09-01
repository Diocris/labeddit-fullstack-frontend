import axios from "axios"
import { useParams } from "react-router-dom"
import { BASE_API_POSTS } from "../../Constants/constants"
import { useContext, useEffect, useState } from "react"
import PostCard from "../../Components/Shared/PostCard/PostCard"
import { CommentAreaStyled, CommentWriteAreaStyled, CommentsHolder, PostStyled } from "./PostStyled"
import Button from "../../Components/Shared/Button/Button"
import Separator from "../../Components/Shared/Separator/Separator"
import CommentCard from "../../Components/Shared/CommentCard/CommentCard"
import { AppContext } from "../../Context/GlobalContext"
import Loader from "../../Components/Shared/Loader/Loader"
import ErrorMessagePrint from "../../Components/Shared/ErrorMessage/ErrorMessagePrint"


export default function Post() {
    
    const {refresh, setRefresh} = useContext(AppContext)
    
    const token = JSON.parse(localStorage.getItem("token"))
    const headers = {
        Authorization: token
    }
    const { id } = useParams()

    const [post, setPost] = useState()
    
    const [comments, setComments] = useState([])  
    
    const [errorPrint, setErrorPrint] = useState("")
    //
    //-- Get Posts
    //
    const getComments = () => {
        axios.get(BASE_API_POSTS + "/" + id + "/comments", { headers })
            .then((response) => {
                setPost(response.data)
                const commentsData = (response.data.postComments).reverse()
                setComments(commentsData)
            })
            .catch((error) => {
                console.log(error.response)
            })
 
    }

    useEffect(() => {
        setTimeout(() => {
            getComments()
        }, 500);
        // eslint-disable-next-line
    }, [refresh])

    
    //
    //--Comment in the post
    //
    const [newComment, setNewComment] = useState("")
    const body ={
        "comment": String(newComment)
    }
    const fillComment = (e)=>{
        const {value} = e.target
        setNewComment(value)
    }
    
    const commentPost = ()=>{
        if(body.comment.length > 1){
        axios.post(BASE_API_POSTS+"/"+id+"/comments", body, {headers})
        .then((response)=>{      
            setNewComment("")
            setRefresh(prevRefresh => !prevRefresh);
        })
        .catch((error)=>{
            console.log(error.response)
        })
    }else{
        setErrorPrint("You can't make an empty post.")
        setTimeout(() => {
            setErrorPrint("")
        }, 3000);
    }
    }

    //
    //-- Print post
    //
    const commentsPrint = comments.map((comment)=>{
        return(
        <CommentCard
        key={comment.commentId}
        postId={id}
        commentId={comment.commentId}
        commentUserName={comment.commentUserName}
        commentContent={comment.commentContent}
         commentLikes={comment.commentLikes}
        />
        )
    })
    
    //
    //?? Return component
    //
    return (<>
        {!post || !commentsPrint ? <Loader/>
        :
        <PostStyled>
        {post && <PostCard 
            key={post.postId}
            id={post.postId}
            creator={post.postCreatorName}
            content={post.postContent}
            likes={post.postLikes}
            comments={post.postComments.length}

        />}
       
        <CommentWriteAreaStyled>
            <CommentAreaStyled type={"text-area"} name="comment" placeholder={"Comment your friend's post.."} alt={"Comment text-area."} value={newComment} onChange={fillComment}/>
        </CommentWriteAreaStyled>
        {errorPrint && <ErrorMessagePrint text={errorPrint}/>}
        <Button text={'Comment'} $variant="$primary" event={commentPost} />
        
        <Separator />
        <CommentsHolder>
        {commentsPrint}
        </CommentsHolder>
    </PostStyled>
        }
       
    </>)
}