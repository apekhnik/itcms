
import {FOLLOW, UNFOLLOW,SET_CURRENT_PAGE,SET_USERS} from '../type'
const initialState = {
  users: [],
  currentPage: 5,
  totalUsersCount: 25,
  pageSize: 5,
  isLoading: false
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
    case 'SET_LOADING_TRUE':
      console.log('[тру')
      return {
        ...state,
        isLoading: true
      }
    case 'SET_LOADING_FALSE':
      console.log('фолсе')
        return {
          ...state,
          isLoading: false
        }
    case 'LOADING_TOGGLER':
      return{
        ...state,
        isLoading: !state.isLoading
      }
    default:
      return state;
  }
};
export default userReducer;
