import React from "react";
import style from "./LoginStyle.css";

const Login = (props) => {
  return (
    <div className={style.container}>
      <div className={style.register}></div>
      <div className={style.grad}></div>
      <div className={style.header}>
        <div className={style.logo}>
          Site<span>1 9 0 5</span>
        </div>
      </div>
      <div className={style.login}>
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
