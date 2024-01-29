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
    <div className="login-box">
      <div className="text-center mb-5">
        <h1>User Register</h1>
      </div>
      <form onSubmit={handleRegister}>
        <div className="form-group mb-5">
          <input
            type="text"
            className="form-control"
            placeholder="User Name"
            onChange={handleUserName}
            required
          />
        </div>

        <div className="form-group mb-5">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            onChange={handlePassword}
            required
          />
        </div>

        <div className="form-group mb-5">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            onChange={handleEmail}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
}

export default SignUp;