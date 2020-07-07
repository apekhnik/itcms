import React from "react";
import DialogsItem from "./DialogsItem";
import style from "../Dialogs.module.css";
const DialogList = ({ dialogs }) => {
  const dialogsList = dialogs.map((d) => (
    <DialogsItem id={d.id} name={d.name} key={d.id} />
  ));
  return <div className={style.dialogs_item}>{dialogsList}</div>;
};
export default DialogList;
