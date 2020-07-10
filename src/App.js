import React from "react";
import MainContainer from "./container/MainContainer";
import "./App.css";
import Header from "./component/Header/Header";
import SideBar from "./component/Sidebar/SideBar";
import Content from "./component/Content/Content";
import ProfilePage from "./component/ProfilePage/ProfilePage";
import { Switch, Route } from "react-router-dom";
import DialogsPage from "./component/DialogsPage/DialogsPage";

function App({ store }) {
  return (
    <MainContainer>
      <Header />
      <SideBar />
      <Content>
        <Switch>
          <Route path="/profile" render={() => <ProfilePage store={store} />} />
          <Route path="/dialogs" render={() => <DialogsPage store={store} />} />
        </Switch>
      </Content>
    </MainContainer>
  );
}

export default App;
