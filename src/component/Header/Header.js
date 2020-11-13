import React from "react";
import style from "./Header.module.css";
import LoginIndicator from "./LoginIndicator";
const Header = ({ login, isAuth, id, userLogout }) => {
  return (
    <div className={style.header}>
      <img
        src="https://c7.hotpng.com/preview/867/960/5/samurai-logo-art-samurai.jpg"
        alt=""
      />
      <LoginIndicator
        login={login}
        isAuth={isAuth}
        id={id}
        userLogout={userLogout}
      />
    </div>
  );
};
export default Header;
