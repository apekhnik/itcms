import React from "react";
import MainContainer from "./container/MainContainer";
import "./App.css";
import Header from "./component/Header/Header";
import SideBar from "./component/Sidebar/SideBar";
import Content from "./component/Content/Content";
import Profile from "./component/Profile/Profile";
import { Switch, Route } from "react-router-dom";
import Dialogs from "./component/Dialogs/Dialogs";

function App() {
  return (
    <MainContainer>
      <Header />
      <SideBar />
      <Content>
        <Switch>
          <Route path="/profile" component={Profile} />
          <Route path="/dialogs" component={Dialogs} />
        </Switch>
      </Content>
    </MainContainer>
  );
}

export default App;
