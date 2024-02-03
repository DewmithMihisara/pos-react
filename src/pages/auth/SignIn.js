import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignIn=()=>{
    const [username,setUsername] =useState("");
    const [password,setPassword] =useState("");

    const handleUserName=(event)=>{
        setUsername(event.target.value);
    }
    const handlePassword=(event)=>{
        setPassword(event.target.value);
    }

    const navigate= useNavigate();

    const handleLogIn= async(event)=>{
        event.preventDefault();
        const data={
            "username":username,
            "password":password,
        }
        const response = await axios.post(`http://localhost:8087/auth/signin`,data);

        if (response.status===200){
            navigate("/");
        }

    }
    return(
        <div className="login-box position-absolute top-50 start-50 translate-middle">
      <div className="text-center mb-5">
        <h1 className="reg-topic topic">Sign-In</h1>
        <p>Hey enter your details</p>
      </div>
      <form onSubmit={handleLogIn}>
        <div className="form-group mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Enter our username"
            onChange={handleUserName}
            required
          />
        </div>

        <div className="form-group mb-4">
          <input
            type="password"
            className="form-control"
            placeholder="Enter your password"
            onChange={handlePassword}
            required
          />
        </div>

        <button type="submit" className="auth-btn btn btn-primary mb-4">
          Sign-In
        </button>
        <p className="para">Dont't have a Account? <a className="link-opacity-50 para" href="/auth/signup">Sign-Up</a></p>
      </form>
    </div>
    )
}

export default SignIn;