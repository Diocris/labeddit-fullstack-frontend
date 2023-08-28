export const goToLogin = ()=>{
    navigate("/login")
}

export const goToSignUp = ()=>{
    navigate("/signup")
}

export const goToHome = () =>{
    navigate("/")
}

export const goToPost = ({id})=>{
    navigate(`/post/${id}`)
}