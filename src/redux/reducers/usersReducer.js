import { usersApi } from "../../API/api";
const FOLLOW = "FOLLOW",
  UNFOLLOW = "UNFOLLOW",
  SET_CURRENT_PAGE = "SET_CURRENT_PAGE",
  SET_USERS = "SET_USERS",
  LOADING_TOGGLER = "LOADING_TOGGLER";
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

export const follow = (id) => ({ type: FOLLOW, payload: id });
export const unfollow = (id) => ({ type: UNFOLLOW, payload: id });
export const setUsers = (data) => ({ type: SET_USERS, payload: data });
export const setCurrentPage = (p) => ({ type: "SET_CURRENT_PAGE", payload: p });
export const followToggle = (b) => ({ type: "TOGGLE", payload: b });
export const fetchingToggler = (t) => ({ type: "LOADING_TOGGLER", payload: t });
export const followingInProgressToggler = (f, id) => ({
  type: "FOLOWING_IN_PROGRESS",
  payload: { f, id },
});
export const getUsersThunkCreator = (currentPage, pageSize) => (dispatch) => {
  dispatch(fetchingToggler(true));
  usersApi
    .getUsers(currentPage, pageSize)
    .then((response) => {
      dispatch(setUsers(response.data));
      dispatch(fetchingToggler(false));
    })
    .catch((e) => console.error(e));
};

export default userReducer;
