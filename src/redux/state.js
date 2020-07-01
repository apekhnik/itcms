import rerenderApp from "./render";

const state = {
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
  profile: {
    inputPostText: "",
    posts: [
      { id: 1, text: "test1" },
      { id: 2, text: "test2" },
      { id: 3, text: "test3" },
    ],
  },
};
export const addPost = (msg) => {
  let post = {
    id: state.profile.posts.length + 1,
    text: msg,
  };
  state.profile.posts.push(post);
  state.profile.inputPostText = "";
  rerenderApp(state);
};
export const onInputTextChange = (val) => {
  state.profile.inputPostText = val;
  rerenderApp(state);
};
export default state;
