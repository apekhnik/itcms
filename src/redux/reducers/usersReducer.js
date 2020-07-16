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
      followed: false,
      location: { city: "12", country: "lnr" },
      status: "Ulala lalau",
    },
    {
      id: 4,
      fullName: "Svsssssta",
      followed: false,
      location: { city: "12", country: "lnr" },
      status: "Ulala lalau",
    },
  ],
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
      console.log(action.payload);
      return {
        ...state,
        users: state.users.map((u) => {
          console.log(u);
          if (u.id === action.payload) {
            return { ...u, followed: !u.followed };
          }
          return u;
        }),
      };
    default:
      return state;
  }
};
export default userReducer;
