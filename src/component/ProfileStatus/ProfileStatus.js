import React, { useState } from "react";

const ProfileStatus = (props) => {
  const [editMode, setEditMode] = useState(false);

  return (
    <div style={{ fontSize: "40px" }}>
      {!editMode && (
        <div onDoubleClick={() => setEditMode(true)}>
          <span>{props.status}</span>
        </div>
      )}
      {editMode && (
        <div>
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
