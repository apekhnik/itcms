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
} from "../../redux/actionCreator";
import * as axios from "axios";
import { usersApi } from "../../API/api";

class UsersContainer extends Component {
  componentDidMount() {
    this.props.fetchingToggler(true);
usersApi.getUsers(this.props.currentPage,this.props.pageSize)
      .then((response) => {
        this.props.setUsers(response.data);
        this.props.fetchingToggler(false);
      })
      .catch((e) => console.error(e));
  }
  onCurrentChange = (p) => {
    this.props.setCurrentPage(p);
    this.props.fetchingToggler(true);
    usersApi.getUsers(p,this.props.pageSize)
      .then((response) => {
        this.props.setUsers(response.data);
        this.props.fetchingToggler(false);
      })
      .catch((e) => console.error(e));
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
})(UsersContainer);
export default UserPage;
