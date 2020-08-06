import React from "react";
import UserItem from "./UserItem";
import Loader from "../Loader/Lodaer";
const Users = (props) => {
  const {
    onCurrentChange,
    followThunk,
    unFollowThunk,
    followingInProgress,
    isLoading,
    users,
    totalUsersCount,
    pageSize,
    currentPage,
  } = props;

  const pagesCount = Math.ceil(totalUsersCount / pageSize);

  let pages = [];
  for (let i = 1; i <= 8; i++) {
    pages.push(i);
  }
  const pagination = pages.map((i) => (
    <span
      style={currentPage === i ? { color: "red" } : {}}
      onClick={() => onCurrentChange(i)}
      key={i}
    >
      {i}
    </span>
  ));
  const userList = users.map((us) => {
    return (
      <UserItem
        user={us}
        followThunk={followThunk}
        unFollowThunk={unFollowThunk}
        followingInProgress={followingInProgress}
        key={us.id}
      />
    );
  });
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      {pagination}
      {userList}
    </div>
  );
};
export default Users;
