import { connect } from "react-redux";
import React, { Component } from "react";
import Users from "./Users";
import {
  follow,
  unfollow,
  setUsers,
  followToggle,
  fetchingToggler,
  setCurrentPage,
  followingInProgressToggler,
  getUsersThunkCreator,
} from "../../redux/reducers/usersReducer";

class UsersContainer extends Component {
  componentDidMount() {
    this.props.getUsersThunkCreator(
      this.props.currentPage,
      this.props.pageSize
    );
  }
  onCurrentChange = (p) => {
    this.props.getUsersThunkCreator(p, this.props.pageSize);
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
  follow,
  unfollow,
  followToggle,
  setUsers,
  setCurrentPage,
  fetchingToggler,
  followingInProgressToggler,
  getUsersThunkCreator,
})(UsersContainer);
export default UserPage;
