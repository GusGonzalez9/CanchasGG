import React from "react";
import "./LoginStyle.css";
const Login = (props) => {
  return (
    <div>
      <div className="register"></div>
      <div className="grad"></div>
      <div className="header">
        <div className="logo">
          Site<span>1 9 0 5</span>
        </div>
      </div>
      <div className="login">
        <input
          type="text"
          placeholder="email"
          name="email"
          onChange={props.handleChange}
        ></input>
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={props.handleChange}
        ></input>
        <input type="button" value="Login" onClick={props.handleSubmit}></input>
      </div>
    </div>
  );
};
export default Login;
