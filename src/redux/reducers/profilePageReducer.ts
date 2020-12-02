import { ADD_POST, ON_INPUT_TEXT_CHANGE } from "../type";
import { profileApi } from "../../API/api";
import { ThunkAction } from "redux-thunk";
import { AppstateType } from "../store";
const SET_CURRENT_PROFILE = "SET_CURRENT_PROFILE",
  SET_USER_STATUS = "SET_USER_STATUS",
  ON_USER_INPUT_STATUS_CHANGE = "ON_USER_INPUT_STATUS_CHANGE",
  SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS"
type ProfileContactsType = {
  github: string | null
  vk: string | null
  facebook: string | null
  instagram: string | null
  twitter: string | null
  website: string | null
  youtube: string | null
  mainLink: string | null

}
export type ProfileType = {
  userId: number
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  contacts: ProfileContactsType
  aboutMe?: string
  photos: PhotosType
}
export type PostItemType = {
  id: number
  text: string
}
export type PhotosType = {
  small: string
  large: string
}
type InitialStateType = {
  inputPostText: string
  posts: Array<PostItemType>
  profile: null | ProfileType
  status: string
}
const initialState: InitialStateType = {
  inputPostText: "",
  posts: [
    { id: 1, text: "test1" },
    { id: 2, text: "test2" },
    { id: 3, text: "test3" },
  ],
  profile: null,
  status: "",
}; type ActionTypes = AddPostActionCreator | InputTextChangeActionCreator | SavePhotoSuccessActionCreator | SetProfileFromFetchActionCreatorType | InputUserStatusChangeActionCreatorType | SetUserStatusActionCreatorType
const profilePageReducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case ADD_POST: {
      let post = {
        id: state.posts.length + 1,
        text: action.payload.text,
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
    case SAVE_PHOTO_SUCCESS: {
      return {
        ...state,
        profile: { ...state.profile, photos: action },
      };
    }
    default:
      break;
  }
  return state;
};
type AddPostActionCreator = {
  type: typeof ADD_POST
  payload: PostItemType
}
export const addPost = (post: PostItemType): AddPostActionCreator => ({ type: "ADD_POST", payload: post });
type SavePhotoSuccessActionCreator = {
  type: typeof SAVE_PHOTO_SUCCESS
  payload: PhotosType
}
const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessActionCreator => ({
  type: SAVE_PHOTO_SUCCESS,
  payload: photos
});
type InputTextChangeActionCreator = {
  type: typeof ON_INPUT_TEXT_CHANGE
  payload: string
}
export const inputTextChange = (text: string): InputTextChangeActionCreator => ({
  type: ON_INPUT_TEXT_CHANGE,
  payload: text,
});
type SetProfileFromFetchActionCreatorType = {
  type: typeof SET_CURRENT_PROFILE
  payload: ProfileType,
}
const setProfileFromFetch = (user: ProfileType): SetProfileFromFetchActionCreatorType => ({
  type: SET_CURRENT_PROFILE,
  payload: user,
});
type InputUserStatusChangeActionCreatorType = {
  type: typeof ON_USER_INPUT_STATUS_CHANGE
  payload: string
}

export const inputUserStatusChange = (text: string): InputUserStatusChangeActionCreatorType => ({
  type: ON_USER_INPUT_STATUS_CHANGE,
  payload: text,
});
type SetUserStatusActionCreatorType = {
  type: typeof SET_USER_STATUS
  payload: string
}
export const setUserStatus = (status: string): SetUserStatusActionCreatorType => ({
  type: SET_USER_STATUS,
  payload: status,
});
type ThunkActionType = ThunkAction<Promise<void>, AppstateType, unknown, ActionTypes>
export const setProfile = (id: number): ThunkActionType => {
  return async (dispatch) => {
    try {
      let response = await profileApi.getProfile(id)
      dispatch(setProfileFromFetch(response.data))
    } catch (error) {

    }
  }
}
export const getStatus = (id: number): ThunkActionType => {
  return async (dispatch) => {
    try {
      let response = await profileApi.getStatus(id)
      dispatch(setUserStatus(response.data))
    } catch (error) {
    }
  }
}
export const updateStatus = (status: string): ThunkActionType => {
  return async (dispatch) => {
    try {
      profileApi.updateStatus(status)
    } catch (error) {
    }
  };
}
export const savePhoto = (photos: PhotosType): ThunkActionType => {
  return async (dispatch) => {
    try {
      let response = await profileApi.savePhoto(photos)
      dispatch(savePhotoSuccess(response.data.data.photos))
    } catch (error) {
    }
  }
}
export const saveProfile = (profile: ProfileType): ThunkActionType => {
  return async (dispatch, getState) => {
    let response = profileApi.saveProfile(profile)
    const authId = getState().auth.id;
    if (response.data.resultCode === 0) {
      //@ts-ignore
      dispatch(setProfile(authId))
    }
  }
}
export default profilePageReducer;
