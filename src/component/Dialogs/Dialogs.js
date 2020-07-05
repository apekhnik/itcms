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
const Dialogs = ({ dialogs, msg, dispatch, newMessageBody }) => {
  const dialogsList = dialogs.map((d) => (
    <DialogsItem id={d.id} name={d.name} key={d.id} />
  ));
  const msgList = msg.map((m, i) => <MessageItem text={m} key={i} />);
  return (
    <div className={style.dialogs}>
      <div className={style.dialogs_item}>{dialogsList}</div>
      <div className={style.message}>{msgList}</div>
      <div className={style.message_enter_area}>
        <textarea
          name=""
          id=""
          value={newMessageBody}
          onChange={(e) =>
            dispatch({
              type: "ON_NEW_MSG_BODY_CHANGE",
              payload: e.target.value,
            })
          }
        ></textarea>
        <button onClick={() => dispatch({ type: "SEND_NEW_MSG" })}>Send</button>
      </div>
    </div>
  );
};

export default Dialogs;
