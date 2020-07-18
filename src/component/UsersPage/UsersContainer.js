import React from "react";
import Users from "./Users";
const UsersContainer = ({ users, follow, unfollow, toggle, setUsers }) => {
  return (
    <div>
      {
        <Users
          users={users}
          follow={follow}
          unfollow={unfollow}
          toggle={toggle}
          setUsers={setUsers}
        />
      }
    </div>
  );
};
export default UsersContainer;
