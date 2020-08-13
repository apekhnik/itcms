import React, { useState } from "react";
import style from "./ProfileStatus.module.css";
const ProfileStatus = (props) => {
  const [editMode, setEditMode] = useState(false);

  return (
    <div className={style.profilestatus}>
      {!editMode && (
        <div
          onDoubleClick={() => setEditMode(true)}
          className={style.span_status}
        >
          <span>{props.status}</span>
        </div>
      )}
      {editMode && (
        <div className={style.input_status}>
          <input
            type="text"
            autoFocus={true}
            onBlur={() => setEditMode(false)}
            value={props.status}
          />
        </div>
      )}
    </div>
  );
};
export default ProfileStatus;
