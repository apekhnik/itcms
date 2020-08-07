import React from "react";
import Avatar from "../Avatar/Avatar";
import UserInfo from "../UserInfo/UserInfo";
import style from "./Account.module.css";
const Account = (props) => {
  // const {
  //   aboutMe,
  //   contacts: { facebook, website, vk, twitter, instagram },
  //   fullName,
  //   lookingForAJob,
  //   lookingForAJobDescription,
  //   photos: { small, large },
  //   userId,
  // } = props.profile;
  return (
    <div className={style.profile}>
      <Avatar src={props.photos.large} />

      <UserInfo
        name={props.fullName}
        lookingForAJob={props.lookingForAJob}
        lookingForAJobDescription={props.lookingForAJobDescription}
        aboutMe={props.aboutMe}
      />
    </div>
  );
};
export default Account;
