import React from "react";
import MainContainer from "./container/MainContainer";
import "./App.css";
import SideBar from "./component/Sidebar/SideBar";
import Content from "./component/Content/Content";
import ProfilePage from "./component/ProfilePage/ProfilePage";
import { Switch, Route } from "react-router-dom";
import DialogsPage from "./component/DialogsPage/DialogsPage";
import UsersPage from "./component/UsersPage/UsersPage";
import HeaderContainer from "./component/Header/HeaderContainer";
function App({ store }) {
  return (
    <MainContainer>
      <HeaderContainer />
      <SideBar />
      <Content>
        <Switch>
          <Route
            path="/profile/:userID?"
            render={() => <ProfilePage store={store} />}
          />
          <Route path="/dialogs" render={() => <DialogsPage />} />
          <Route path="/users" render={() => <UsersPage />} />
        </Switch>
      </Content>
    </MainContainer>
  );
}

export default App;
