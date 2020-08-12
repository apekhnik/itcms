import React from "react";
import style from "./Dialogs.module.css";
import DialogList from "./DialogsList/DialogsList";
import MessageList from "./Messages/MessagesList";
import Input from "../Input/Input";

const DialogsContainer = ({
  dialogs,
  messages,
  newMessageBody,
  sendNewMessage,
  messageInputChange,
}) => {
  const addMessage = () => {
    sendNewMessage();
  };
  const onInputChangeHandler = (e) => {
    messageInputChange(e.target.value);
  };
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
