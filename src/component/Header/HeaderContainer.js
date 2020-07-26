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
        let b = {
          data: {
            id: 1000,
            login: "emelya",
            email: "ss",
          },
          resultCode: 0,
        };
        if (b.resultCode === 0) {
          this.props.setUserAuthData(b.data);
        }
      })
      .catch((e) => console.error(e));
  }
  render() {
    console.log(this.props.isAuth);
    return <Header login={this.props.isAuth} />;
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
