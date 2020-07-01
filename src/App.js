import React from "react";
import MainContainer from "./container/MainContainer";
import "./App.css";
import Header from "./component/Header/Header";
import SideBar from "./component/Sidebar/SideBar";
import Content from "./component/Content/Content";
import Profile from "./component/Profile/Profile";
import { Switch, Route } from "react-router-dom";
import Dialogs from "./component/Dialogs/Dialogs";

function App({ state }) {
  const { dialogs, messages } = state;
  return (
    <MainContainer>
      <Header />
      <SideBar />
      <Content>
        <Switch>
          <Route path="/profile" render={() => <Profile />} />
          <Route
            path="/dialogs"
            render={() => <Dialogs dialogs={dialogs} msg={messages} />}
          />
        </Switch>
      </Content>
    </MainContainer>
  );
}

export default App;
