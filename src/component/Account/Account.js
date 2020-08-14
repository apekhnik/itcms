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
  console.log(props.profile);
  const fakeAva =
    "https://cs10.pikabu.ru/post_img/big/2018/03/18/1/1521324516155263949.png";
  return (
    <div className={style.profile}>
      <Avatar src={fakeAva} />

      <UserInfo
        name={props.profile.fullName}
        lookingForAJob={props.profile.lookingForAJob}
        lookingForAJobDescription={props.profile.lookingForAJobDescription}
        aboutMe={props.profile.aboutMe}
      />
    </div>
  );
};
export default Account;
