import React from "react";
import style from "../Dialogs.module.css";
import { NavLink } from "react-router-dom";
const DialogsItem = ({ id, name }) => {
  const path = `/dialogs/${id}`;
  return (
    <NavLink to={path} className={style.dialog} activeClassName={style.active}>
      {name}
    </NavLink>
  );
};
export default DialogsItem;
