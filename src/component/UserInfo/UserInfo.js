import React from "react";
import style from "./UserInfo.module.css";
import ProfileStatus from "../ProfileStatus/ProfileStatus";
const UserInfo = ({
  lookingForAJobDescription,
  lookingForAJob,
  name,
  aboutMe,
  updateStatus,
  status,
  inputUserStatusChange,
}) => {
  return (
    <div className={style.info}>
      <h1>{name}</h1>
      <ProfileStatus
        status={status}
        updateStatus={updateStatus}
        inputUserStatusChange={inputUserStatusChange}
      />
      <p>{lookingForAJobDescription}</p>
      <p>{aboutMe}</p>
    </div>
  );
};
export default UserInfo;
