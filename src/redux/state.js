import profilePageReducer from "./reducers/profilePageReducer";
import dialogsPageReducer from "./reducers/dialogsPageReducer";

let store = {
  _state: {
    dialogsPage: {
      dialogs: [
        {
          id: 1,
          name: "Шура",
        },
        {
          id: 2,
          name: "Даша",
        },
        {
          id: 3,
          name: "Маша",
        },
        {
          id: 4,
          name: "Вероника",
        },
      ],
      messages: ["yo", "qu", "hi"],
      newMessageBody: "",
    },
    profilePage: {
      inputPostText: "",
      posts: [
        { id: 1, text: "test1" },
        { id: 2, text: "test2" },
        { id: 3, text: "test3" },
      ],
    },
    sidebar: {},
  },
  callSubscriber() {
    console.log("was rerendered");
  },
  getState() {
    return this._state;
  },
  subscribe(obs) {
    this.callSubscriber = obs;
  },
  dispatch(action) {
    this._state.profilePage = profilePageReducer(
      this._state.profilePage,
      action
    );
    this._state.dialogsPage = dialogsPageReducer(
      this._state.dialogsPage,
      action
    );
    this.callSubscriber();
  },
};

export default store;
