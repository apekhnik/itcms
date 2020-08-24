import React, { useState } from "react";
import style from "./ProfileStatus.module.css";

const ProfileStatus = (props) => {
  const [editMode, setEditMode] = useState(false);
  const status =
    props.status === null ? (
      <div onClick={() => setEditMode(true)} className={style.span_status}>
        <span>'Изменить статус'</span>
      </div>
    ) : (
      <div onClick={() => setEditMode(true)} className={style.span_status}>
        <span>{props.status}</span>
      </div>
    );
  const nullStatus = (
    <div onClick={() => setEditMode(true)} className={style.span_status}>
      <span>'Изменить статус'</span>
    </div>
  );
  const editStatus = (
    <div className={style.editStatus}>
      <input
        type="text"
        autoFocus={true}
        onBlur={() => {
          setEditMode(false);
          props.updateStatus(props.status);
        }}
        value={props.status}
        onChange={(e) => props.inputUserStatusChange(e.target.value)}
      />
    </div>
  );
  return (
    <div className={style.profilestatus}>
      {!editMode && (status || nullStatus)}
      {editMode && editStatus}
    </div>
  );
};
export default ProfileStatus;
