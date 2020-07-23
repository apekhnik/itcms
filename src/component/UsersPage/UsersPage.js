import { connect } from "react-redux";
import React, {Component} from 'react'
import Users from './Users'
import {
  followUserAction,
  unFollowUserAction,
} from "../../redux/actionCreator";
import * as axios from 'axios'

class UsersContainer extends Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => this.props.setUsers(response.data))
      .catch((e) => console.error(e));
  }
  onCurrentChange = (p) => {
    this.props.setCurrentPage(p);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`
      )
      .then((response) => this.props.setUsers(response.data))
      .catch((e) => console.error(e));
  };
  render() {
    return <Users onCurrentChange={this.onCurrentChange}
            {...this.props}
          />
  }
        
    
};
const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    currentPage: state.usersPage.currentPage,
    totalUsersCount: state.usersPage.totalUsersCount,
    pageSize: state.usersPage.pageSize,
  };
};
const mapDispathToProps = (dispatch) => {
  return {
    follow: (id) => {
      dispatch(followUserAction(id));
    },
    unfollow: (id) => {
      dispatch(unFollowUserAction(id));
    },
    toggle: (id) => {
      dispatch({ type: "TOGGLE", payload: id });
    },
    setUsers: (users) => {
      dispatch({ type: "SET_USERS", payload: users });
    },
    setCurrentPage: (p) => {
      dispatch({ type: "SET_CURRENT_PAGE", payload: p });
    },
  };
};
const UserPage = connect(mapStateToProps, mapDispathToProps)(UsersContainer);


export default UserPage