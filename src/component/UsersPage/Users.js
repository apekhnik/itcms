import React from "react";
import UserItem from "./UserItem";
import Loader from "../Loader/Lodaer";
const Users = (props) => {
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= 8; i++) {
    pages.push(i);
  }
  if (props.isLoading) {
    return <Loader />;
  }
  
  return (
    <div>
      {pages.map((i) => (
        <span
          style={props.currentPage === i ? { color: "red" } : {}}
          onClick={() => props.onCurrentChange(i)}
        >
          {i}
        </span>
      ))}
      {props.users.map((us, index) => {
        return (
          <UserItem
            user={us}
            follow={props.followToggle}
            unfollow={props.unfollow}
            toggle={props.followToggle}
            key={us.id}
          />
        );
      })}
    </div>
  );
};
export default Users;
