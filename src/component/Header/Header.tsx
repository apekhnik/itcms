import React from "react";
import style from "./Header.module.css";
import LoginIndicator from "./LoginIndicator";
import Logo from '../Logo/Logo'
type HeaderType = {
  login: string | null
  isAuth: boolean
  id: number | null
  userLogout: () => void
}
const Header: React.FC<HeaderType> = ({ login, isAuth, id, userLogout }) => {
  return (
    <div className={style.header}>
      <Logo />
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
