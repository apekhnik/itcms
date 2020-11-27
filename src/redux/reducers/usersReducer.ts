import { usersApi } from "../../API/api";
const FOLLOW = "FOLLOW",
  UNFOLLOW = "UNFOLLOW",
  SET_CURRENT_PAGE = "SET_CURRENT_PAGE",
  SET_USERS = "SET_USERS",
  LOADING_TOGGLER = "LOADING_TOGGLER",
  FOLOWING_IN_PROGRESS = "FOLOWING_IN_PROGRESS";
  type InitialState = {
    users: Array<User>
    currentPage: number
    totalUsersCount: number
    pageSize: number
    isLoading: boolean
    followingInProgress: Array<{}> | never,
  }
  type User = {
    name: string
    id: number
    photos: {
      small: string | null
      large: string | null
    }
    status: string | null
    followed: boolean
  }
const initialState:InitialState = {
  users: [],
  currentPage: 5,
  totalUsersCount: 25,
  pageSize: 10,
  isLoading: false,
  followingInProgress: [],
};
type ActionType = {
  type: string
  payload: any
}
const userReducer = (state = initialState, action:ActionType) => {
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
        followingInProgress: action.payload.f
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
export const acceptFollow = (id:number):AcceptFollowActionCreatorType => ({ type: FOLLOW, payload: id });
type AcceptUnFollowActionCreatorType = {
  type: typeof UNFOLLOW
  payload: number
}
export const acceptUnfollow = (id:number): AcceptUnFollowActionCreatorType => ({ type: UNFOLLOW, payload: id });
type SetUsersActionCreatorType = {
  type: typeof SET_USERS
  payload: UsersResponseType
}
type UsersResponseType = {
  error: null
  items: Array<User>
  totalCount: number
}
export const setUsers = (data:UsersResponseType): SetUsersActionCreatorType => ({ type: SET_USERS, payload: data });
type SetCurrentPageActionCreatorType = {
  type: typeof SET_CURRENT_PAGE
  payload: number
}
export const setCurrentPage = (page:number):SetCurrentPageActionCreatorType => ({ type: SET_CURRENT_PAGE, payload: page });
type FetchingTogglerActionCreatorType = {
  type: typeof LOADING_TOGGLER
  payload: boolean
}
export const fetchingToggler = (toogler:boolean):FetchingTogglerActionCreatorType => ({ type: LOADING_TOGGLER, payload: toogler });
type FollowingInProgressTogglerActionCreatorType = {
  type: typeof FOLOWING_IN_PROGRESS
  payload: {
    toogle: boolean
    id: number
  }
}
export const followingInProgressToggler = (toogle:boolean, id:number): FollowingInProgressTogglerActionCreatorType => ({
  type: FOLOWING_IN_PROGRESS,
  payload: { toogle, id },
});
export const getUsers = (currentPage:number, pageSize:number) => (dispatch:any) => {
  dispatch(fetchingToggler(true));
  usersApi
    .getUsers(currentPage, pageSize)
    .then((response:any) => {
      
      dispatch(setUsers(response.data));
      dispatch(fetchingToggler(false));
    })
    .catch((e:any) => console.error(e));
};
export const follow = (id:number) => (dispatch:any) => {
  dispatch(followingInProgressToggler(true, id));
  usersApi.follow(id).then((response:any) => {
    if (response.data.resultCode === 0) {
      dispatch(acceptFollow(id));
    }
    dispatch(followingInProgressToggler(false, id));
  });
};
export const unfollow = (id:number) => (dispatch:any) => {
  dispatch(followingInProgressToggler(true, id));
  usersApi.unfollow(id).then((response:any) => {
    if (response.data.resultCode === 0) {
      dispatch(acceptUnfollow(id));
    }
    dispatch(followingInProgressToggler(false, id));
  });
};

export default userReducer;
