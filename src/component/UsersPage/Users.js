import React, { Component } from "react";
import UserItem from "./UserItem";
class Users extends Component {
 
  render() {
    const pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
console.log(this.props)
    return (
      <div>
        {pages.map((i) => (
          <span
            style={this.props.currentPage === i ? { color: "red" } : {}}
            onClick={() => this.props.onCurrentChange(i)}
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
