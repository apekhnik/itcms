import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Header.module.css";
const LoginIndicator = ({ login, isAuth, id, userLogout }) => {
  const linkToLogin = (
    <NavLink to={"/login"} className={style.auth_block}>
      Login
    </NavLink>
  );
  const logoutBtn = (
    <button
      onClick={() => {
        userLogout();
      }}
    >
      logout
    </button>
  );
  const linkToProfile = <NavLink to={`/profile/${id}`}>{login}</NavLink>;

  if (!isAuth) return linkToLogin;
  return (
    <div className={style.auth_block}>
      Hello, {linkToProfile}
      {logoutBtn}
    </div>
  );
};
export default LoginIndicator;
