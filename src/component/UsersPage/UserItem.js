import React from "react";
import style from "./Users.module.css";
import Avatar from "../Avatar/Avatar";
import { NavLink } from "react-router-dom";
import * as axios from 'axios'
const User = ({ user, follow, unfollow, toggle }) => {
  const { name, id, followed, status } = user;
  const userFollow = () => {
    axios
      .delete(
        `https://social-network.samuraijs.com/api/1.0/follow/${id}`,{withCredentials: true}
      )
      .then((response) => {
        console.log(response)
      })
      .catch((e) => console.error(e));
    follow(id)
  }
  const followBadge = followed ? <div onClick={userFollow}>UNFOLLOW</div> : <div onClick={() => follow(id)}>FOLLOW</div>;
  
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
