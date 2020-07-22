import React, { Component } from "react";
import Users from "./Users";
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
  render(){
    return (
      <div>
        {
          <Users
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            toggle={this.props.toggle}
            setUsers={this.props.setUsers}
            onCurrentChange={this.onCurrentChange}
          />
        }
      </div>
    );
  }
};
export default UsersContainer;
