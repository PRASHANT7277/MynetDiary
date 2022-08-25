import { Routes,Route } from "react-router-dom";
import Home from "./Home";
import Login from "./login in";
import Signup from "./signup";

export default function AllRoutes(){
    return(
        <>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
          
        </Routes>
        </>
    )
}