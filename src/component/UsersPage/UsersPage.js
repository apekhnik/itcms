import { connect } from "react-redux";
import React, { Component } from "react";
import Users from "./Users";

import {
  followingInProgressToggler,
  getUsers,
  follow,
  setCurrentPage,
  unfollow,
} from "../../redux/reducers/usersReducer";

class UsersContainer extends Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }
  onCurrentChange = (p) => {
    this.props.setCurrentPage(p);
    this.props.getUsers(p, this.props.pageSize);
  };
  render() {
    return <Users onCurrentChange={this.onCurrentChange} {...this.props} />;
  }
}
const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    currentPage: state.usersPage.currentPage,
    totalUsersCount: state.usersPage.totalUsersCount,
    pageSize: state.usersPage.pageSize,
    isLoading: state.usersPage.isLoading,
    followingInProgress: state.usersPage.followingInProgress,
  };
};
// const mapDispathToProps = (dispatch) => {
//   return {
//     follow,
//     unfollow,
//     toggle: (id) => {
//       dispatch(followToggle(id));
//     },
//     setUsers: (users) => dispatch(setUsers(users)),
//     setCurrentPage: (p) => {
//       dispatch({ type: "SET_CURRENT_PAGE", payload: p });
//     },
//     fetchingToggler: (t) => dispatch({ type: "LOADING_TOGGLER", payload: t }),
//   };
// };
// const UserPage = connect(mapStateToProps, mapDispathToProps)(UsersContainer);
const UserPage = connect(mapStateToProps, {
  followingInProgressToggler,
  getUsers,
  follow,
  setCurrentPage,
  unfollow,
})(UsersContainer);
export default UserPage;
