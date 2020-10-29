import React from "react";
import Avatar from "../Avatar/Avatar";
import style from "./Account.module.css";
import Loader from "../Loader/Lodaer";
import ProfileDescription from "../ProfilePage/ProfileDescription";

const Account = (props) => {
  const loadPhoto = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };

  const fakeAva =
    "https://cs10.pikabu.ru/post_img/big/2018/03/18/1/1521324516155263949.png";
  if (!props.profile) return <Loader />;

  const ava = props.profile.photos.large || fakeAva;

  return (
    <div className={style.profile}>
      <Avatar
        src={ava}
        isOwner={props.isOwner}
        loadPhoto={loadPhoto}
        savePhoto={props.savePhoto}
      />
      <ProfileDescription {...props} />
    </div>
  );
};
export default Account;
