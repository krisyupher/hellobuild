import React, { useState } from "react";
import loginService from "../../services/login";
import { Link } from "react-router-dom";
import "./signUp.scss";
const SignUp = () => {
  const [githudName, setGithudName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignUp = (event) => {
    event.preventDefault();
    loginService.singUp(githudName, userEmail, password);
    setGithudName("");
    setUserEmail("");
    setPassword("");
  };
  return (
    <div className="signUpContainer">
      <form onSubmit={handleSignUp}>
        <h3>Register</h3>
        <div className="form-group">
          <label>githud name</label>
          <input
            type="text"
            value={githudName}
            className="form-control"
            placeholder="githud name"
            onChange={(e) => {
              setGithudName(e.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={userEmail}
            className="form-control"
            placeholder="Email"
            onChange={(e) => {
              setUserEmail(e.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <button type="submit" className="btn btn-dark btn-lg btn-block">
          Register
        </button>
        <p className="forgot-password text-right">
          Already registered <Link to="login">log in?</Link>
        </p>
      </form>
    </div>
  );
};
export default SignUp;
