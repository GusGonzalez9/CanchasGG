import React from "react";
import style from "./RegisterStyle.css";
const Register = (props) => {
  return (
    <div>
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
          placeholder="name"
          name="name"
          onChange={props.handleChange}
        ></input>
        <input
          type="text"
          placeholder="email"
          name="email"
          onChange={props.handleChange}
        ></input>
        <input
          type="text"
          placeholder="phone"
          name="phone"
          onChange={props.handleChange}
        ></input>
        <input
          type="text"
          placeholder="adress"
          name="adress"
          onChange={props.handleChange}
        ></input>
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={props.handleChange}
        ></input>
        <input
          type="button"
          value="Register"
          onClick={props.handleSubmit}
        ></input>
      </div>
    </div>
  );
};
export default Register;
