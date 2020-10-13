import React from "react";
import UserItem from "./UserItem";
import Loader from "../Loader/Lodaer";
import Paginator from "./Paginator";
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
      <Paginator
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={onCurrentChange}
      />
      {userList}
    </div>
  );
};
export default Users;
