import React from "react";
import style from "./SideBar.module.css";
import { Link } from "react-router-dom";
const SideBar = () => {
  return (
    <div className={style.sidebar}>
      <div className={style.links}>
        <Link to="/dialogs">Dialogs</Link>

        <Link to="/profile">Profile</Link>
        <Link to="/users">Users</Link>
      </div>
    </div>
  );
};
export default SideBar;
