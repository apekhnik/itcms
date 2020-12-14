import React from "react";
import { connect } from "react-redux";
import Header from "./Header";

import { userLogout } from "../../redux/reducers/authReducer";
import { AppstateType } from "../../redux/store";

const HeaderContainer: React.FC<MapState & MapDisp> = ({ login, isAuth, id, userLogout }) => {
  return (
    <Header login={login} isAuth={isAuth} id={id} userLogout={userLogout} />
  )
}

const mapStateToProps = (state: AppstateType): MapState => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    id: state.auth.id,
  };
};
type MapState = {
  login: string | null
  isAuth: boolean
  id: number | null
}
type MapDisp = {
  userLogout: () => void
}
export default connect<MapState, MapDisp, {}, AppstateType>(mapStateToProps, {
  userLogout,

})(HeaderContainer);
