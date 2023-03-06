import React,{useState} from "react";
import "./signup.css";
const Signup=()=>{

return(
    <div>
        <div className="signup">
    <div className="signupDiv">
    <h2 className="activesignup"> Sign Up </h2>
        <form className="signupForm">
        <label htmlFor="email">Email</label>
        <input  type="email" className="text" ></input>
        <br/>
        
        <label htmlFor="password">Password</label>
        
        <input  type="password" className="text" ></input>
        <br/>
        <br/>
        <button type="submit" className="signupButton">sign up</button>
        
        </form>
    </div>
    
    </div>
        
    </div>
);
}
export default Signup;