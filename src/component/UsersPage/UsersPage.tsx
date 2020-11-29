import { connect } from "react-redux";
import React, { Component } from "react";
import Users from "./Users";
import { AppstateType } from '../../redux/store'

import {
  getUsers,
  follow,
  setCurrentPage,
  unfollow,
  UserType,
} from "../../redux/reducers/usersReducer";

type MapStateType = {
  users: Array<UserType>
  pageSize: number
  currentPage: number
  totalUsersCount: number
  isLoading: boolean
  followingInProgress: Array<number>
}
type MapDispatchType = {
  getUsers: (currentPage: number, pageSize: number) => void
  setCurrentPage: (p: number) => void
  follow: (id: number) => void
  unfollow: (id: number) => void
}
type MainType = MapStateType & MapDispatchType
class UsersContainer extends Component<MainType> {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }
  onCurrentChange = (p: number) => {
    this.props.setCurrentPage(p);
    this.props.getUsers(p, this.props.pageSize);
  };
  render() {
    return <Users onCurrentChange={this.onCurrentChange} {...this.props} />;
  }
}
const mapStateToProps = (state: AppstateType):MapStateType => {
  return {
    users: state.usersPage.users,
    currentPage: state.usersPage.currentPage,
    totalUsersCount: state.usersPage.totalUsersCount,
    pageSize: state.usersPage.pageSize,
    isLoading: state.usersPage.isLoading,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

const UserPage = connect<MapStateType, MapDispatchType, {}, AppstateType>(mapStateToProps, {
  getUsers,
  follow,
  setCurrentPage,
  unfollow,
})(UsersContainer);
export default UserPage;
