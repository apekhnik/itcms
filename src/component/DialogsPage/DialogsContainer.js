import React from "react";
import style from "./Dialogs.module.css";
import DialogList from "./DialogsList/DialogsList";
import MessageList from "./Messages/MessagesList";
import Input from "../Input/Input";
import { Redirect } from "react-router-dom";

const DialogsContainer = ({
  dialogs,
  messages,
  newMessageBody,
  sendNewMessage,
  messageInputChange,
  isAuth,
}) => {
  const addMessage = () => {
    sendNewMessage();
  };
  const onInputChangeHandler = (e) => {
    messageInputChange(e.target.value);
  };
  if (!isAuth) return <Redirect to={"/login"} />;
  return (
    <div className={style.dialogs_page_container}>
      <DialogList dialogs={dialogs} />
      <MessageList messages={messages} />
      <Input
        textChangeHandler={onInputChangeHandler}
        inputValue={newMessageBody}
        send={addMessage}
      />
    </div>
  );
};
export default DialogsContainer;
