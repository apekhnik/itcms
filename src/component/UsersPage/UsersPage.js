import { connect } from "react-redux";
import Users from "./Users";
import {
  followUserAction,
  unFollowUserAction,
} from "../../redux/actionCreator";
import UsersContainer from "./UsersContainer";
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
export default UserPage;
