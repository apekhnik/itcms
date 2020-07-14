import { connect } from "react-redux";
import UsersContainer from "./UsersContainer";
const mapStateToProps = (state) => {
  console.log(state);
  return {
    users: state.usersPage.users,
  };
};
const UserPage = connect(mapStateToProps)(UsersContainer);
export default UserPage;
