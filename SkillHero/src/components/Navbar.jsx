import { Link } from "react-router-dom";

const Navbar = ()=>{
    return(
        <>
        <div className="bg-blue-950 text-white text-xl flex px-5 gap-9">
        <Link to={"/"}>Home</Link>
        <Link to={"/signup"}>SignUp</Link>
        <Link to={"/login"}>Login</Link>
        <Link to={"/forgot"}>ForgotPassword</Link>
        <Link to={"/testomonials"}>Testimonials</Link>
        <Link to={"/courses"}>Courses</Link>
        </div>
        </>
    )
}
export default Navbar