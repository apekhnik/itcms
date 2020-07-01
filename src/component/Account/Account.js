import React from "react";
import Avatar from "../Avatar/Avatar";
import UserInfo from "../UserInfo/UserInfo";
import style from "./Account.module.css";
const Account = () => {
  return (
    <div className={style.profile}>
      <Avatar src="https://horrorzone.ru/uploads/_gallery/45123/megan-fox06.jpg" />
      <UserInfo />
    </div>
  );
};
export default Account;
