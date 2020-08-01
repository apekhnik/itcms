import React from "react";
import style from "./Users.module.css";
import Avatar from "../Avatar/Avatar";
import { NavLink } from "react-router-dom";
import * as axios from "axios";
import { usersApi } from "../../API/api";
const User = ({ user, follow, unfollow, toggle }) => {
  const { name, id, followed, status } = user;
  const userFollow = () => {
usersApi.follow(id)
      .then((response) => {
        if (response.data.resultCode == 0) {
          follow(id);
        }
      });
  };
  const userUnfollow = () => {
    usersApi.unfollow(id)
      .then((response) => {
        if (response.data.resultCode == 0) {
          unfollow(id);
        }
      });
  };

  const followBadge = followed ? (
    <button onClick={userUnfollow}>Unfollow</button>
  ) : (
    <button onClick={userFollow}>Follow</button>
  );

  return (
    <div className={style.users_item}>
      <div className={style.users_item_head}>
        <NavLink to={`/profile/${id}`}>
          <Avatar
            src="https://horrorzone.ru/uploads/_gallery/45123/megan-fox06.jpg"
            size="min"
          />
        </NavLink>
        {followBadge}
      </div>
      <div className={style.users_item_body}>
        <h2>{name}</h2>
        <p>{status}</p>

        <div className={style.users_item_bodyBadge}>
          {/* <span>{location.city}</span>
          <span>{location.country}</span> */}
        </div>
      </div>
    </div>
  );
};
export default User;
