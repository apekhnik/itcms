const ADD_POST = "ADD_POST",
  ON_INPUT_TEXT_CHANGE = "ON_INPUT_TEXT_CHANGE",
  ON_NEW_MSG_BODY_CHANGE = "ON_NEW_MSG_BODY_CHANGE",
  SEND_NEW_MSG = "SEND_NEW_MSG";

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
  rerenderApp() {
    console.log("was rerendered");
  },
  getState() {
    return this._state;
  },
  subscribe(obs) {
    this.rerenderApp = obs;
  },
  dispatch(action) {
    switch (action.type) {
      case ADD_POST:
        let post = {
          id: this._state.profilePage.posts.length + 1,
          text: this._state.profilePage.inputPostText,
        };
        this._state.profilePage.posts.push(post);
        this._state.profilePage.inputPostText = "";
        this.rerenderApp();
        break;
      case ON_INPUT_TEXT_CHANGE:
        this._state.profilePage.inputPostText = action.payload;
        this.rerenderApp();
        break;
      case ON_NEW_MSG_BODY_CHANGE:
        this._state.dialogsPage.newMessageBody = action.payload;
        this.rerenderApp();
        break;
      case SEND_NEW_MSG:
        this._state.dialogsPage.messages.push(
          this._state.dialogsPage.newMessageBody
        );
        this._state.dialogsPage.newMessageBody = "";
        this.rerenderApp();
        break;
      default:
        break;
    }
  },
};

export default store;
