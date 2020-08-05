import React from "react";
import style from "./Users.module.css";
import Avatar from "../Avatar/Avatar";
import { NavLink } from "react-router-dom";
const User = ({ user, followingInProgress, followThunk, unFollowThunk }) => {
  const { name, id, followed, status, photos } = user;

  const userFollow = (e) => followThunk(id);

  const userUnfollow = (e) => unFollowThunk(id);

  const disabledHelper = followingInProgress.some((e) => e === id);
  const followBadge = followed ? (
    <button onClick={userUnfollow} disabled={disabledHelper}>
      Unfollow
    </button>
  ) : (
    <button onClick={userFollow} disabled={disabledHelper}>
      Follow
    </button>
  );
  const avatarPhoto =
    photos.small || photos.large
      ? photos.small || photos.large
      : "https://horrorzone.ru/uploads/_gallery/45123/megan-fox06.jpg";
  return (
    <div className={style.users_item}>
      <div className={style.users_item_head}>
        <NavLink to={`/profile/${id}`}>
          <Avatar src={avatarPhoto} size="min" />
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
