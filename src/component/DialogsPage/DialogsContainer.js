import React from "react";
import style from "./Dialogs.module.css";
import DialogList from "./DialogsList/DialogsList";
import MessageList from "./Messages/MessagesList";
import { Field, reduxForm } from "redux-form";

const DialogsContainer = ({
  dialogs,
  messages,
  newMessageBody,
  sendNewMessage,
  messageInputChange,
}) => {
  const onSubmit = (data) => {
    sendNewMessage(data);
  };
  return (
    <div className={style.dialogs_page_container}>
      <DialogList dialogs={dialogs} />
      <MessageList messages={messages} />
      <MessageReduxForm onSubmit={onSubmit} />
    </div>
  );
};
const dialogForm = (props) => (
  <form onSubmit={props.handleSubmit}>
    <Field
      placeholder={"Enter your message"}
      component={"input"}
      name={"message"}
      className={"1"}
    />
  </form>
);
const MessageReduxForm = reduxForm({ form: "message" })(dialogForm);
export default DialogsContainer;
