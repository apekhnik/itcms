import React from "react";
import style from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
const DialogsItem = ({ id, name }) => {
  const path = `/dialogs/${id}`;
  return (
    <NavLink to={path} className={style.dialog} activeClassName={style.active}>
      {name}
    </NavLink>
  );
};
const MessageItem = ({ text }) => {
  return (
    <div className={style.message_item}>
      <p>{text}</p>
    </div>
  );
};
const Dialogs = () => {
  return (
    <div className={style.dialogs}>
      <div className={style.dialogs_item}>
        <DialogsItem id={1} name="anton" />
        <DialogsItem id={2} name="shure" />
        <DialogsItem id={3} name="vitalya" />
        <DialogsItem id={4} name="annet" />
        <DialogsItem id={5} name="valera" />
      </div>
      <div className={style.message}>
        <MessageItem text="hi" />
        <MessageItem text="yo" />
        <MessageItem text="wazzup" />
        <MessageItem text="howdy" />
      </div>
    </div>
  );
};

export default Dialogs;
