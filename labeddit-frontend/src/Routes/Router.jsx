import { BrowserRouter, Routes, Route } from "react-router-dom"
import Feed from "../Pages/Feed/Feed";
import Login from "../Pages/Login/Login";
import Header from "../Components/Shared/Header/Header"
import SignUp from "../Pages/SignUp/SignUp";
import Post from "../Pages/Post/Post";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index path="/" element={<Feed />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="post/:id" element={<Post />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
