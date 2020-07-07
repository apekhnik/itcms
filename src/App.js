import React from "react";
import MainContainer from "./container/MainContainer";
import "./App.css";
import Header from "./component/Header/Header";
import SideBar from "./component/Sidebar/SideBar";
import Content from "./component/Content/Content";
import Profile from "./component/Profile/Profile";
import { Switch, Route } from "react-router-dom";
import Dialogs from "./component/Dialogs/Dialogs";

function App({ state, dispatch, store }) {
  const { dialogsPage, profilePage } = state;
  const { dialogs, messages, newMessageBody } = dialogsPage;
  const { inputPostText, posts } = profilePage;
  return (
    <MainContainer>
      <Header />
      <SideBar />
      <Content>
        <Switch>
          <Route
            path="/profile"
            render={() => (
              <Profile
                posts={posts}
                inputPost={inputPostText}
                dispatch={dispatch}
                store={store}
              />
            )}
          />
          <Route
            path="/dialogs"
            render={() => (
              <Dialogs
                dialogs={dialogs}
                msg={messages}
                dispatch={dispatch}
                newMessageBody={newMessageBody}
              />
            )}
          />
        </Switch>
      </Content>
    </MainContainer>
  );
}

export default App;
