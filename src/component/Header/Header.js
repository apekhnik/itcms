import React from "react";
import style from "./Header.module.css";
import LoginIndicator from "./LoginIndicator";
const Header = ({ login, isAuth, id, userLogout }) => {
  return (
    <div className={style.header}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJAxZAiRvNkkO7CdVVTrWeiuGNAeTTOBslyT5_B1p-SAHoAYqt&usqp=CAU"
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
