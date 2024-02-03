import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp=()=>{
    const [username,setUsername] =useState("");
    const [password,setPassword] =useState("");
    const [email,setEmail] =useState("");

    const navigate= useNavigate();

    const handleUserName=(event)=>{
        setUsername(event.target.value);
    }
    const handlePassword=(event)=>{
        setPassword(event.target.value);
    }
    const handleEmail=(event)=>{
        setEmail(event.target.value);
    }

    const handleRegister= async(event)=>{
        event.preventDefault();
        const data={
            "username":username,
            "password":password,
            "email":email
        }
        const response = await axios.post(`http://localhost:8087/auth/signup`,data);

        if (response.status===200){
            navigate("/signin");
        }
    }

  return (
    <div className="login-box position-absolute top-50 start-50 translate-middle">
      <div className="text-center mb-5">
        <h1 className="reg-topic topic">Sign-Up</h1>
        <p>Hey enter your details for create new account</p>
        <p>test</p>
      </div>
      <form onSubmit={handleRegister}>
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
            type="email"
            className="form-control"
            placeholder="Enter your email address"
            onChange={handleEmail}
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

        <button type="submit" className="auth-btn btn btn-primary">
          Sign-Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;