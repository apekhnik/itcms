import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import * as axios from "axios";

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.resultCode === 0) {
          this.props.setUserAuthData(response.data.data);
        }
      })
      .catch((e) => console.error(e));
  }
  render() {
    console.log(this.props.login);
    return <Header login={this.props.login} isAuth={this.props.isAuth} />;
  }
}
const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setUserAuthData: (data) => {
      dispatch({ type: "SET_USER_DATA", payload: data });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
