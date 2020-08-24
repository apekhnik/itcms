import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { setAuthData } from "../../redux/reducers/authReducer";
class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.setAuthData();
  }

  render() {
    const { login, isAuth, id } = this.props;
    return <Header login={login} isAuth={isAuth} id={id} />;
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

export default connect(mapStateToProps, { setAuthData })(HeaderContainer);
