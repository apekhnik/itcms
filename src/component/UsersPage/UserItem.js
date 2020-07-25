import React from "react";
import style from "./Users.module.css";
import Avatar from "../Avatar/Avatar";
import { NavLink } from "react-router-dom";
const User = ({ user, follow, unfollow, toggle }) => {
  const { name, id, followed, status } = user;
  const followBadge = followed ? "UNFOLLOW" : "FOLLOW";

  return (
    <div className={style.users_item}>
      <div className={style.users_item_head}>
        <NavLink to={`/profile/${id}`}>
            <Avatar
              src="https://horrorzone.ru/uploads/_gallery/45123/megan-fox06.jpg"
              size="min"
            />
        </NavLink>
        <div
          onClick={() => {
            toggle(id);
          }}
        >
          {followBadge}
        </div>
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
