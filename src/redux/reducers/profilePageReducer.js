import { ADD_POST, ON_INPUT_TEXT_CHANGE } from "../type";
import { profileApi } from "../../API/api";
const SET_CURRENT_PROFILE = "SET_CURRENT_PROFILE",
  SET_USER_STATUS = "SET_USER_STATUS",
  ON_USER_INPUT_STATUS_CHANGE = "ON_USER_INPUT_STATUS_CHANGE";
const initialState = {
  inputPostText: "",
  posts: [
    { id: 1, text: "test1" },
    { id: 2, text: "test2" },
    { id: 3, text: "test3" },
  ],
  profile: null,
  status: "",
};
const profilePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let post = {
        id: state.posts.length + 1,
        text: action.payload.post,
      };
      return {
        ...state,
        posts: [...state.posts, post],
        inputPostText: "",
      };
    }
    case ON_INPUT_TEXT_CHANGE: {
      return {
        ...state,
        inputPostText: action.payload,
      };
    }
    case SET_CURRENT_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    case SET_USER_STATUS:
      return {
        ...state,
        status: action.payload,
      };
    case ON_USER_INPUT_STATUS_CHANGE: {
      return {
        ...state,
        status: action.payload,
      };
    }
    case "SAVE_PHOTO_SUCCESS": {
      return {
        ...state,
        profile: { ...state.profile, photos: action.payload },
      };
    }
    default:
      break;
  }
  return state;
};
export const addPost = (post) => ({ type: "ADD_POST", payload: post });
const savePhotoSuccess = (photos) => ({
  type: "SAVE_PHOTO_SUCCESS",
  payload: photos,
});
export const inputTextChange = (text) => ({
  type: ON_INPUT_TEXT_CHANGE,
  payload: text,
});
export const fetchProfile = (user) => ({
  type: SET_CURRENT_PROFILE,
  payload: user,
});

export const setProfile = (id) => (dispatch) => {
  profileApi
    .getProfile(id)
    .then((response) => {
      dispatch(fetchProfile(response.data));
    })
    .catch((e) => console.error(e));
};
export const inputUserStatusChange = (text) => ({
  type: ON_USER_INPUT_STATUS_CHANGE,
  payload: text,
});
export const setUserStatus = (status) => ({
  type: SET_USER_STATUS,
  payload: status,
});
export const getStatus = (id) => (dispatch) => {
  profileApi.getStatus(id).then((res) => dispatch(setUserStatus(res.data)));
};
export const updateStatus = (status) => (dispatch) => {
  profileApi.updateStatus(status).then((response) => console.log(response));
};
export const savePhoto = (photos) => (dispatch) => {
  profileApi
    .savePhoto(photos)
    .then((response) => dispatch(savePhotoSuccess(response.data.data.photos)));
};
export const saveProfile =(profile)=>(dispatch, getState) => {

  profileApi.saveProfile(profile).then((response) => {
    const authId = getState().auth.id;
    
    if(response.data.resultCode === 0){
      dispatch(setProfile(authId))
    }
    
  });
}
export default profilePageReducer;
