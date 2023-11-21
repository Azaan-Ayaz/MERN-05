import react from "react";
import {Routes,Route} from "react-router-dom"
import Home from "../pages/Home";
import ForgotPassword from "../pages/ForgotPassword";
import SignUp from "../pages/SignUp";
import Testimonials from "../pages/Testimonials";
import Login from "../pages/Login";
import Courses from "../pages/Courses";


const MyRoutes = ()=>{
return(
    <>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/forgot" element={<ForgotPassword/>}/>
        <Route path="/testomonials" element={<Testimonials/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/signup" element={<SignUp/>}/>
    </Routes>
    </>
)
}

export default MyRoutes