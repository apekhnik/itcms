const initialState = {
  users: [
    {
      id: 0,
      fullName: "Leha",
      followed: true,
      location: { city: "12", country: "lnr" },
      status: "Ulala lalau",
    },
    {
      id: 2,
      fullName: "Shara",
      followed: true,
      location: { city: "12", country: "lnr" },
      status: "Ulala lalau",
    },
    {
      id: 3,
      fullName: "Sveta",
      followed: true,
      location: { city: "12", country: "lnr" },
      status: "Ulala lalau",
    },
    {
      id: 3,
      fullName: "Svsssssta",
      followed: true,
      location: { city: "12", country: "lnr" },
      status: "Ulala lalau",
    },
  ],
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FOLLOW":
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.payload) {
            return { ...u, followed: true };
          }
          return state;
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
    default:
      return state;
  }
};
export default userReducer;
