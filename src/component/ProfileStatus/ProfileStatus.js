import React, { useState } from "react";
import style from "./ProfileStatus.module.css";

const ProfileStatus = (props) => {
  const [editMode, setEditMode] = useState(false);
  const status = (
    <div onClick={() => setEditMode(true)} className={style.span_status}>
      <span>{props.status}</span>
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
      {!editMode && status}
      {editMode && editStatus}
    </div>
  );
};
export default ProfileStatus;
