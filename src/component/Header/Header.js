import React from "react";
import style from "./Header.module.css";
import { NavLink } from "react-router-dom";
const Header = (props) => {
  return (
    <div className={style.header}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJAxZAiRvNkkO7CdVVTrWeiuGNAeTTOBslyT5_B1p-SAHoAYqt&usqp=CAU"
        alt=""
      />
      <div className={style.auth_block}>
        {props.isAuth ? (
          `You LogIn like ${props.login}`
        ) : (
          <NavLink to={"/login"}>LOGIN</NavLink>
        )}
      </div>
    </div>
  );
};
export default Header;
