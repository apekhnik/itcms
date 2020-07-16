import React from "react";
import Users from "./Users";
const UsersContainer = ({ users, follow, unfollow, toggle }) => {
  return (
    <div>
      {
        <Users
          users={users}
          follow={follow}
          unfollow={unfollow}
          toggle={toggle}
        />
      }
    </div>
  );
};
export default UsersContainer;
