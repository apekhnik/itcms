import React from "react";
import UserItem from "./UserItem";
import Loader from "../Loader/Lodaer";
import Paginator from "./Paginator";
import {UserType} from '../../redux/reducers/usersReducer'
type PropsType = {
  onCurrentChange:(p:number)=>void
  follow:(id:number)=>void
  unfollow:(id:number)=>void
  followingInProgress:Array<number>
  isLoading:boolean
  users:Array<UserType>
  totalUsersCount:number
  pageSize:number
  currentPage:number
}
const Users:React.FC<PropsType> = (props) => {
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
