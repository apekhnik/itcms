import React from "react";
import UserItem from "./UserItem";
const Users = ({ users, follow, unfollow, toggle }) => {
  const userList = users.map((us) => (
    <UserItem user={us} follow={follow} unfollow={unfollow} toggle={toggle} />
  ));
  return <div>{userList}</div>;
};
export default Users;
