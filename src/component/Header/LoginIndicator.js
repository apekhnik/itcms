import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Header.module.css";
const LoginIndicator = ({ login, isAuth, id }) => {
  if (!isAuth)
    return (
      <NavLink to={"/login"} className={style.auth_block}>
        Login
      </NavLink>
    );
  console.log(id);
  return (
    <div className={style.auth_block}>
      Hello, {login}
      {id}
    </div>
  );
};
export default LoginIndicator;
