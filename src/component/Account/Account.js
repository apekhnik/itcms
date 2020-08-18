import React from "react";
import Avatar from "../Avatar/Avatar";
import UserInfo from "../UserInfo/UserInfo";
import style from "./Account.module.css";
import Loader from "../Loader/Lodaer";
const Account = (props) => {
  const fakeAva =
    "https://cs10.pikabu.ru/post_img/big/2018/03/18/1/1521324516155263949.png";
  if (!props.profile) return <Loader />;
  return (
    <div className={style.profile}>
      <Avatar src={fakeAva} />

      <UserInfo
        name={props.profile.fullName}
        lookingForAJob={props.profile.lookingForAJob}
        lookingForAJobDescription={props.profile.lookingForAJobDescription}
        aboutMe={props.profile.aboutMe}
        status={props.status}
        updateStatus={props.updateStatus}
        inputUserStatusChange={props.inputUserStatusChange}
      />
    </div>
  );
};
export default Account;
