import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { setAuthData } from "../../redux/reducers/authReducer";
class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.setAuthData();
  }
  render() {
    return <Header login={this.props.login} isAuth={this.props.isAuth} />;
  }
}
const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  };
};

export default connect(mapStateToProps, { setAuthData })(HeaderContainer);
