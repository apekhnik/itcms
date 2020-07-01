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
const Dialogs = ({ dialogs, msg }) => {
  const dialogsList = dialogs.map((d) => (
    <DialogsItem id={d.id} name={d.name} key={d.id} />
  ));
  const msgList = msg.map((m, i) => <MessageItem text={m} key={i} />);
  return (
    <div className={style.dialogs}>
      <div className={style.dialogs_item}>{dialogsList}</div>
      <div className={style.message}>{msgList}</div>
    </div>
  );
};

export default Dialogs;
