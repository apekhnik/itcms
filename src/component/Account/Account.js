import React from "react";
import Avatar from "../Avatar/Avatar";
import UserInfo from "../UserInfo/UserInfo";
import style from "./Account.module.css";

const Account = (props) => {
  const {
    aboutMe,
    fullName,
    lookingForAJob,
    lookingForAJobDescription,
    // photos: { small, large },
  } = props.profile;
  const fakeAva =
    "https://cs10.pikabu.ru/post_img/big/2018/03/18/1/1521324516155263949.png";
  return (
    <div className={style.profile}>
      <Avatar src={fakeAva} />

      <UserInfo
        name={fullName}
        lookingForAJob={lookingForAJob}
        lookingForAJobDescription={lookingForAJobDescription}
        aboutMe={aboutMe}
        status={props.status}
        updateStatus={props.updateStatus}
        inputUserStatusChange={props.inputUserStatusChange}
      />
    </div>
  );
};
export default Account;
