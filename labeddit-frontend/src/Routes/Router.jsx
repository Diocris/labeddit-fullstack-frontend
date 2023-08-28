import { BrowserRouter, Routes, Route } from "react-router-dom"
import Feed from "../Pages/Feed/Feed";
import Login from "../Pages/Login/Login";
import Header from "../Pages/Shared/Header/Header";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index path="/" element={<Feed />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
