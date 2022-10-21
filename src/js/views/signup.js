import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";


import { Context } from "../store/appContext";

export const Signup = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    
  return (
    <form >
        <br />
        <div className="mb-3">
        <label htmlFor="First name" className="form-label">
         <strong>First Name</strong>
        </label>
        <input
          type="name"
          className="form-control"
          id="First name"
          
        />
      </div>
      <div className="mb-3">
        <label htmlFor="last name" className="form-label">
         <strong>Last Name</strong>
        </label>
        <input
          type="lastname"
          className="form-control"
          id="last name"
          
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
         <strong>Email address</strong> 
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
         <strong>Password</strong>
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          onChange={e => setPassword(e.target.value)}
          
        />
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Check me out
        </label>
      </div>
      <Link to="/login">
      <button type="submit" className="btn btn-outline-primary mt-3 mb-3 w-100" onClick={async () => {
          await actions.signup({
            email: email,
            password: password,
          });
        }}>
        Registrarse
      </button>
          </Link>
    </form>
  );
};