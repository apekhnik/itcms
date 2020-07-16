import { connect } from "react-redux";
import UsersContainer from "./UsersContainer";
import {
  followUserAction,
  unFollowUserAction,
} from "../../redux/actionCreator";
const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
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
  };
};
const UserPage = connect(mapStateToProps, mapDispathToProps)(UsersContainer);
export default UserPage;
