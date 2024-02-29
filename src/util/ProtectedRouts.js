import axios from "axios";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

const ProtectedRoutes = () => {
    const token = localStorage.getItem("token");

    const navigate = useNavigate();

    if(!token) {
        navigate("/signin");
    }

    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    return <Outlet />

}

export default ProtectedRoutes;