import React from "react";
import style from "./Dialogs.module.css";
import DialogList from "./DialogsList/DialogsList";
import MessageList from "./Messages/MessagesList";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { Textarea } from "../../forms/form-controls/Textarea";
import { } from "../../forms/form-validator/validator";
import { DialogItemType } from "../../redux/reducers/dialogsPageReducer";
type PropsType = {
  dialogs: DialogItemType[]
  messages: string[]
  sendNewMessage: (text: string) => void
}
type DialogType = {
  message: string
}
const DialogsContainer: React.FC<PropsType> = ({ dialogs, messages, sendNewMessage }) => {
  const onSubmit = (data: DialogType) => {
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
const dialogForm: React.FC<InjectedFormProps<DialogType, {}> & {}> = (props) => (
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
const MessageReduxForm = reduxForm<DialogType, {}>({ form: "message" })(dialogForm);
export default DialogsContainer;
