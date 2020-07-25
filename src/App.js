import React from "react";
import MainContainer from "./container/MainContainer";
import "./App.css";
import Header from "./component/Header/Header";
import SideBar from "./component/Sidebar/SideBar";
import Content from "./component/Content/Content";
import ProfilePage from "./component/ProfilePage/ProfilePage";
import { Switch, Route } from "react-router-dom";
import DialogsPage from "./component/DialogsPage/DialogsPage";
import UsersPage from "./component/UsersPage/UsersPage";
function App({ store }) {
  return (
    <MainContainer>
      <Header />
      <SideBar />
      <Content>
        <Switch>
          <Route path="/profile/:userID?" render={() => <ProfilePage store={store} />} />
          <Route path="/dialogs" render={() => <DialogsPage store={store} />} />
          <Route path="/users" render={() => <UsersPage store={store} />} />
        </Switch>
      </Content>
    </MainContainer>
  );
}

export default App;
