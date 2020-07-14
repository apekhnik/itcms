import React from "react";
import style from "./Users.module.css";
import Avatar from "../Avatar/Avatar";
const User = ({ user }) => {
  console.log(user);
  const { fullName, id, followed, location, status } = user;
  const follow = followed ? "UNFOLLOW" : "FOLLOW";
  return (
    <div className={style.users_item}>
      <div className={style.users_item_head}>
        <Avatar
          src="https://horrorzone.ru/uploads/_gallery/45123/megan-fox06.jpg"
          size="min"
        />
        <div>{follow}</div>
      </div>
      <div className={style.users_item_body}>
        <h2>{fullName}</h2>
        <p>{status}</p>
        {/* status */}
        {/* location */}
        <div className={style.users_item_bodyBadge}>
          <span>{location.city}</span>
          <span>{location.country}</span>
        </div>
      </div>
    </div>
  );
};
export default User;
