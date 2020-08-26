import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import {
  getAuthDataFromApi,
  userLogout,
} from "../../redux/reducers/authReducer";
class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthDataFromApi();
  }

  render() {
    const { login, isAuth, id, userLogout } = this.props;
    return (
      <Header login={login} isAuth={isAuth} id={id} userLogout={userLogout} />
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    id: state.auth.id,
    email: state.auth.email,
  };
};

export default connect(mapStateToProps, { getAuthDataFromApi, userLogout })(
  HeaderContainer
);
