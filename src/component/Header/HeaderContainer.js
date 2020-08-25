import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
<<<<<<< HEAD
<<<<<<< HEAD
import { setAuthData } from "../../redux/reducers/authReducer";
=======
import {
  getAuthDataFromApi,
  userLogout,
} from "../../redux/reducers/authReducer";
>>>>>>> ae6e2f4... to many changes
=======
import { getAuthDataFromApi } from "../../redux/reducers/authReducer";
>>>>>>> b1eced7... add some stuff
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

<<<<<<< HEAD
<<<<<<< HEAD
export default connect(mapStateToProps, { setAuthData })(HeaderContainer);
=======
export default connect(mapStateToProps, { getAuthDataFromApi, userLogout })(
  HeaderContainer
);
>>>>>>> ae6e2f4... to many changes
=======
export default connect(mapStateToProps, { getAuthDataFromApi })(
  HeaderContainer
);
>>>>>>> b1eced7... add some stuff
