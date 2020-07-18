import React, { Component } from "react";
import UserItem from "./UserItem";
import * as axios from "axios";
class Users extends Component {
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
    const pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
      <div>
        {pages.map((i) => (
          <span
            style={this.props.currentPage === i ? { color: "red" } : {}}
            onClick={() => this.onCurrentChange(i)}
          >
            {i}
          </span>
        ))}
        {this.props.users.map((us, index) => {
          return (
            <UserItem
              user={us}
              follow={this.props.follow}
              unfollow={this.props.unfollow}
              toggle={this.props.toggle}
              key={us.id}
            />
          );
        })}
      </div>
    );
  }
}
export default Users;
