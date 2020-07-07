import React from "react";
import style from "./Dialogs.module.css";
import DialogList from "./DialogsList/DialogsList";
import MessageList from "./Messages/MessagesList";
import Input from "../Input/Input";
import { inputNewMsgAction, sendNewMsgAction } from "../../redux/actionCreator";
const DialogsContainer = ({ store }) => {
  const { dialogs, messages, newMessageBody } = store.getState().dialogsPage;
  const addMessage = () => {
    store.dispatch(sendNewMsgAction());
  };
  const onInputChangeHandler = (e) => {
    store.dispatch(inputNewMsgAction(e.target.value));
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
