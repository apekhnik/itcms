import React from "react";
import MainContainer from "./container/MainContainer";
import "./App.css";
import SideBar from "./component/Sidebar/SideBar";
import Content from "./component/Content/Content";
import ProfilePage from "./component/ProfilePage/ProfilePage";
import { Switch, Route, withRouter } from "react-router-dom";
import DialogsPage from "./component/DialogsPage/DialogsPage";
import UsersPage from "./component/UsersPage/UsersPage";
import HeaderContainer from "./component/Header/HeaderContainer";
import Login from "./component/Login/Login";
import { Component } from "react";
import { connect } from "react-redux";
import Loader from "./component/Loader/Lodaer";
import { setInitialized } from "./redux/reducers/appReducer";
import { compose } from "redux";
class App extends Component {
  componentDidMount() {
    this.props.setInitialized();
  }
  render() {
    if (!this.props.initialized)
      return (
        <div style={{ background: "black" }}>
          <Loader />
        </div>
      );
    return (
      <MainContainer>
        <HeaderContainer />
        <SideBar />
        <Content>
          <Switch>
            <Route path="/profile/:userID?" render={() => <ProfilePage />} />
            <Route path="/dialogs" render={() => <DialogsPage />} />
            <Route path="/users" render={() => <UsersPage />} />
            <Route path="/login" component={Login} />
          </Switch>
        </Content>
      </MainContainer>
    );
  }
}
const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});
export default compose(
  withRouter,
  connect(mapStateToProps, { setInitialized })
)(App);
