import { useContext, useEffect, useState } from "react"
import { AppContext } from "../../Context/GlobalContext"
import { useNavigate } from "react-router-dom"
import { goToLogin } from "../../Routes/coordinator"
import axios from 'axios'
import { BASE_API_POSTS } from "../../Constants/constants"
import PostCard from "../../Components/Shared/PostCard/PostCard"
import { FeedStyled } from "./FeedStyled"
import NewPostArea from "../../Components/Shared/NewPostCard/NewPostCard"
import Loader from "../../Components/Shared/Loader/Loader"
import Warning from "../../Components/Shared/Warning/Warning"
export default function Feed() {
    const { refresh } = useContext(AppContext)
    const { loggedIn } = useContext(AppContext)

    const navigate = useNavigate()

    useEffect(() => {
        if (!loggedIn) {
            goToLogin(navigate)
        }
    })

    const [posts, setPosts] = useState([])

    const token = JSON.parse(localStorage.getItem("token"))
    const headers = {
        "Authorization": token
    }


    useEffect(() => {
        axios.get(BASE_API_POSTS, { headers })
            .then((response) => {
                
                const posts = response.data.reverse()
                setPosts(posts)
            })
            .catch(
                (error) => {
                    console.log(error.response.data)
                }
            )
        // eslint-disable-next-line
    }, [refresh])
    const [errorPrint, setErrorPrint] = useState("")

    const postsPrint = posts.map((post) => {
        return (
            <PostCard
                key={post.id}
                id={post.id}
                creator={post.creator.name}
                content={post.content}
                likes={post.likes}
                comments={post.comments}
                setErrorPrint={setErrorPrint}
            />
        )
    });

    return (<>
        {!postsPrint
            ? <Loader />
            : (<>
      {errorPrint !== "" && <Warning text={errorPrint} />}
                <NewPostArea />
                <FeedStyled>
                    {postsPrint}
                </FeedStyled>
            </>)
        }

    </>)
}