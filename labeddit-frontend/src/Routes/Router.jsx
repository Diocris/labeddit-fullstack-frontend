import {BrowserRouter, Routes, Route} from "react-router-dom"

export default function Router() {
    return (
      <>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route index path="/" element={<Home/>} />
            <Router path="/login" element ={<Login/>}/>
            <Router path = "/signup" element={<SignUp/>}/>
            <Router path = "/post/:id" element={<Post/>} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
  