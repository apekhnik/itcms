const initialState = {
  users: [],
  currentPage: 5,
  totalUsersCount: 25,
  pageSize: 5,
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FOLLOW":
      console.log("popali");
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.payload) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case "UNFOLLOW":
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.payload) {
            return { ...u, followed: false };
          }
          return state;
        }),
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
    case "SET_USERS":
      return {
        ...state,
        users: [...action.payload.items],
        totalUsersCount: action.payload.totalCount,
      };
    case "SET_CURRENT_PAGE":
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
};
export default userReducer;
