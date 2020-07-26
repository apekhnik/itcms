import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Header.module.css";
const LoginIndicator = ({ login, isAuth }) => {
  if (!isAuth) return <NavLink to={"/ff"}>Login</NavLink>;
  return <div className={style.auth_block}>Hello, {login}</div>;
};
export default LoginIndicator;
