import React from "react";
import Avatar from "../Avatar/Avatar";
import UserInfo from "../UserInfo/UserInfo";
import style from "./Account.module.css";
const Account = (props) => {
  
  const {
    aboutMe,
    contacts: { facebook, website, vk, twitter, instagram },
    fullName,
    lookingForAJob,
    lookingForAJobDescription,
    photos: { small, large },
    userId,
  } = props.profile;
  return (
    <div className={style.profile}>
      <Avatar src={large} />

      <UserInfo
        name={fullName}
        lookingForAJob={lookingForAJob}
        lookingForAJobDescription={lookingForAJobDescription}
        aboutMe={aboutMe}
      />
    </div>
  );
};
export default Account;
