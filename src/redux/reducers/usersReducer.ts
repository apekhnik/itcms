import { usersApi } from "../../API/api";
import { ThunkAction } from "redux-thunk";
import { AppstateType } from "../store";
const FOLLOW = "FOLLOW",
  UNFOLLOW = "UNFOLLOW",
  SET_CURRENT_PAGE = "SET_CURRENT_PAGE",
  SET_USERS = "SET_USERS",
  LOADING_TOGGLER = "LOADING_TOGGLER",
  FOLOWING_IN_PROGRESS = "FOLOWING_IN_PROGRESS";
type InitialState = {
  users: Array<UserType>
  currentPage: number
  totalUsersCount: number
  pageSize: number
  isLoading: boolean
  followingInProgress: Array<number> | never,
}
export type UserType = {
  name: string
  id: number
  photos: {
    small: string | null
    large: string | null
  }
  status: string | null
  followed: boolean
}
const initialState: InitialState = {
  users: [],
  currentPage: 5,
  totalUsersCount: 25,
  pageSize: 10,
  isLoading: false,
  followingInProgress: [],
};
type UserReducerActionsType = AcceptFollowActionCreatorType | AcceptUnFollowActionCreatorType | SetUsersActionCreatorType | SetCurrentPageActionCreatorType | FetchingTogglerActionCreatorType | FollowingInProgressTogglerActionCreatorType
const userReducer = (state = initialState, action: UserReducerActionsType) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {

          if (u.id === action.payload) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.payload) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case FOLOWING_IN_PROGRESS:
      return {
        ...state,
        followingInProgress: action.payload.toogle
          ? [...state.followingInProgress, action.payload.id]
          : state.followingInProgress.filter((id) => id !== action.payload.id),
      };
    case SET_USERS:
      console.log(action.payload)
      return {
        ...state,
        users: [...action.payload.items],
        totalUsersCount: action.payload.totalCount,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case LOADING_TOGGLER:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};
type AcceptFollowActionCreatorType = {
  type: typeof FOLLOW
  payload: number
}
export const acceptFollow = (id: number): AcceptFollowActionCreatorType => ({ type: FOLLOW, payload: id });
type AcceptUnFollowActionCreatorType = {
  type: typeof UNFOLLOW
  payload: number
}
export const acceptUnfollow = (id: number): AcceptUnFollowActionCreatorType => ({ type: UNFOLLOW, payload: id });
type SetUsersActionCreatorType = {
  type: typeof SET_USERS
  payload: UsersResponseType
}
type UsersResponseType = {
  error: null
  items: Array<UserType>
  totalCount: number
}
export const setUsers = (data: UsersResponseType): SetUsersActionCreatorType => ({ type: SET_USERS, payload: data });
type SetCurrentPageActionCreatorType = {
  type: typeof SET_CURRENT_PAGE
  payload: number
}
export const setCurrentPage = (page: number): SetCurrentPageActionCreatorType => ({ type: SET_CURRENT_PAGE, payload: page });
type FetchingTogglerActionCreatorType = {
  type: typeof LOADING_TOGGLER
  payload: boolean
}
export const fetchingToggler = (toogler: boolean): FetchingTogglerActionCreatorType => ({ type: LOADING_TOGGLER, payload: toogler });
type FollowingInProgressTogglerActionCreatorType = {
  type: typeof FOLOWING_IN_PROGRESS
  payload: {
    toogle: boolean
    id: number
  }
}
export const followingInProgressToggler = (toogle: boolean, id: number): FollowingInProgressTogglerActionCreatorType => ({
  type: FOLOWING_IN_PROGRESS,
  payload: { toogle, id },
});
type ThunkCreatortype = ThunkAction<Promise<void>, AppstateType, unknown, UserReducerActionsType>
export const getUsers =
  (currentPage: number, pageSize: number): ThunkCreatortype => {
    return async (dispatch) => {
      try {
        dispatch(fetchingToggler(true));
        let data = await usersApi.getUsers(currentPage, pageSize)

        dispatch(setUsers(data.data));
        dispatch(fetchingToggler(false));
      } catch (error) {
        console.log(error)
      }


    };
  }

export const follow = (id: number): ThunkCreatortype => {
  return async dispatch => {

    try {
      dispatch(followingInProgressToggler(true, id));
      let response = await usersApi.follow(id)
      if (response.data.resultCode === 0) {
        dispatch(acceptFollow(id));
      }
      dispatch(followingInProgressToggler(false, id));
    } catch (error) {

    }
  };
}
export const unfollow = (id: number): ThunkCreatortype => {
  return async (dispatch) => {
    try {
      dispatch(followingInProgressToggler(true, id));
      let response = await usersApi.unfollow(id)
      if (response.data.resultCode === 0) {
        dispatch(acceptUnfollow(id));
      }
      dispatch(followingInProgressToggler(false, id));

    }
    catch (error) {

    }
  }}

  export default userReducer;
