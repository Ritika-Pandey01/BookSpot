import React,{useState} from "react";
import "./login.css";
import { NavLink } from "react-router-dom";

const Login=()=>{
    
return(
    <div className="login">
    <div className="loginDiv">
    <h2 className="activeLogin"> Log In </h2>
        <form className="LoginForm">
        <label htmlFor="email">Email</label>
        <input  type="email" className="text"></input>
        <br/>
        <br/>
        <label htmlFor="password">Password</label>
        
        <input  type="password" className="text" ></input>
        
        <button type="submit" className="loginButton">Login</button>
        <hr/>
        <label className="labelnew">New user? <NavLink to="/Signup" className="signupLink">Signup</NavLink></label>
        </form>
    </div>
    
    </div>
);
}
export default Login;