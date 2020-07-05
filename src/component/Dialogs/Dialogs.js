import React from "react";
import style from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import { sendNewMsgAction, inputNewMsgAction } from "../../redux/actionCreator";
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
  const onInputMessageChange = (e) =>
    dispatch(inputNewMsgAction(e.target.value));
  const onMessageSend = () => dispatch(sendNewMsgAction());
  return (
    <div className={style.dialogs}>
      <div className={style.dialogs_item}>{dialogsList}</div>
      <div className={style.message}>{msgList}</div>
      <div className={style.message_enter_area}>
        <textarea
          value={newMessageBody}
          onChange={onInputMessageChange}
        ></textarea>
        <button onClick={onMessageSend}>Send</button>
      </div>
    </div>
  );
};

export default Dialogs;
