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
import Preloader from "./component/Loader/Preloader";
import { setInitialized } from "./redux/reducers/appReducer";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import style from './App.module.css'
class App extends Component {
  componentDidMount() {
    this.props.setInitialized();
  }
  render() {
    if (!this.props.initialized)  return <Preloader/>
    return (
      <MainContainer>
        <HeaderContainer />
        <SideBar />
        <Content>
          <Switch>
            <Route path="/" exact render={() => <Redirect to='/profile'/>} />
            <Route path="/profile/:userID?" render={() => <ProfilePage />} />
            <Route path="/dialogs" render={() => <DialogsPage />} />
            <Route path="/users" render={() => <UsersPage />} />
            
            <Route path="/login" component={Login} />
            <Route path='*'  render={()=><div>404</div>}/>
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
