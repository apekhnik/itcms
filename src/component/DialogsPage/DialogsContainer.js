import React from "react";
import style from "./Dialogs.module.css";
import DialogList from "./DialogsList/DialogsList";
import MessageList from "./Messages/MessagesList";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../forms/form-controls/Textarea";
import {} from "../../forms/form-validator/validator";
const DialogsContainer = ({ dialogs, messages, sendNewMessage }) => {
  const onSubmit = (data) => {
    sendNewMessage(data.message);
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
      component={Textarea}
      name={"message"}
      className={"1"}
      validate={[]}
    />
  </form>
);
const MessageReduxForm = reduxForm({ form: "message" })(dialogForm);
export default DialogsContainer;
