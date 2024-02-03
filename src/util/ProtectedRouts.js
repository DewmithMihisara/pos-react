import axios from "axios";
import { Outlet, useNavigate } from "react-router-dom";


const ProtectedRouts =()=>{
    const token =localStorage.getItem('token');
    console.log(token);

    const navigate =useNavigate();

    if(!token){
        navigate("/signin");
        console.log(token);
    }

    axios.defaults.headers.common['Authorization']= `Bearer ${token}`;

    return <Outlet />
}

export default ProtectedRouts;