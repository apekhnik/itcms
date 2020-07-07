import React from "react";
import style from "../Dialogs.module.css";
const MessageItem = ({ text }) => {
  return (
    <div className={style.message_item}>
      <p>{text}</p>
    </div>
  );
};
export default MessageItem;
