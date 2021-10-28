import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import loginService from "../../services/login";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import "./login.scss";
const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const handleLogin = (event) => {
    event.preventDefault();
    const aux = loginService.login(userEmail, password);
    if (aux) {
      dispatch({
        type: "SET_AUTH",
        payload: aux,
      });
      setUserEmail("");
      setPassword("");
      setTimeout(() => {
        history.push("/listRepositories");
      }, 1000);
    }
  };
  return (
    <div className="LoginContainer">
      <form onSubmit={handleLogin}>
        <h3>Log in</h3>
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
            value={password}
            className="form-control"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <button type="submit" className="btn btn-dark btn-lg btn-block">
          Sign in
        </button>
        <p className="forgot-password text-right">
          create
          <Link to="signUp"> account</Link>
        </p>
      </form>
    </div>
  );
};
export default Login;
