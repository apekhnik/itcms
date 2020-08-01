import {
  FOLLOW,
  UNFOLLOW,
  SET_CURRENT_PAGE,
  SET_USERS,
  LOADING_TOGGLER,
} from "../type";
const initialState = {
  users: [],
  currentPage: 5,
  totalUsersCount: 25,
  pageSize: 5,
  isLoading: false,
  followingInProgress: [],
};
const userReducer = (state = initialState, action) => {
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
    case "FOLOWING_IN_PROGRESS":
      console.log(action.payload.f);
      return {
        ...state,
        followingInProgress: action.payload.f
          ? [...state.followingInProgress, action.payload.id]
          : state.followingInProgress.filter((id) => id != id),
      };
    case "TOGGLE":
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.payload) {
            return { ...u, followed: !u.followed };
          }
          return u;
        }),
      };
    case SET_USERS:
      console.log(action.payload.items);
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
export default userReducer;
