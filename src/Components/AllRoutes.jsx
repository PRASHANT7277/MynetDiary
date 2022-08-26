import { Routes,Route } from "react-router-dom";
import Home from "./Home";
import Login from "./login in";
import Signup from "./signup";
import Wblog from "./Wbog";

export default function AllRoutes(){
    return(
        <>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/wblog" element={<Wblog/>} />
        </Routes>
        </>
    )
}