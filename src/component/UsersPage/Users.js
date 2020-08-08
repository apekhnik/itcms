import React from "react";
import UserItem from "./UserItem";
import Loader from "../Loader/Lodaer";
const Users = (props) => {
  const {
    onCurrentChange,
    follow,
    unfollow,
    followingInProgress,
    isLoading,
    users,
    totalUsersCount,
    pageSize,
    currentPage,
  } = props;

  const pagesCount = Math.ceil(totalUsersCount / pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount && i < 10; i++) {
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
        follow={follow}
        unfollow={unfollow}
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
