import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const Login = () => {
  //definimos los estados
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {actions} = useContext(Context)
  let history = useHistory();

  const handleSubmit = (e)=>{
    e.preventDefault()
   let onLogged = actions.login(email,password);
    setEmail("")
    setPassword("")
    onLogged ? history.push("/") : null;


  }

  return (
    <form className="container p-5 mt-5 mb-5" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder="Enter email"/>
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e)=>setPassword(e.target.value)} value={password} placeholder="Password"/>
      </div>
      <button type="submit" className="btn btn-outline-primary mt-3 mb-3">Login</button>
      
    
    </form>
        )
};
