import React from "react";
import style from "./UserInfo.module.css";
const UserInfo = ({lookingForAJobDescription,lookingForAJob, name, aboutMe}) => {
  return (
    <div className={style.info}>
      <p>{name}</p>
      <p>{lookingForAJobDescription}</p>
      <p>{aboutMe}</p>
    </div>
  );
};
export default UserInfo;
