import React from "react";
import style from "../Dialogs.module.css";
import MessageItem from "./MessageItem";
const MessageList = ({ messages }) => {
  const messageList = messages.map((m, i) => <MessageItem text={m} key={i} />);
  return <div className={style.message_page}>{messageList}</div>;
};
export default MessageList;
