import React from "react";
import Users from "./Users";
const UsersContainer = ({ users }) => {
  return <div>{<Users users={users} />}</div>;
};
export default UsersContainer;
