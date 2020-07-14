import React from "react";
import UserItem from "./UserItem";
const Users = ({ users }) => {
  const userList = users.map((us) => <UserItem user={us} />);
  return <div>{userList}</div>;
};
export default Users;
