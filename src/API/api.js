import * as axios from "axios";
const myOWnApiKey = "f91d8361-3403-4210-8f5f-940d2b9340a7";
export const usersApi = {
  getUsers: (currentPage = 1, pageSize = 5) => {
    return axios.get(
      `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,
      { withCredentials: true }
    );
  },
  follow: (id) => {
    return axios.post(
      `https://social-network.samuraijs.com/api/1.0/follow/${id}`,
      {},
      {
        withCredentials: true,
        headers: {
          "API-KEY": myOWnApiKey,
        },
      }
    );
  },
  unfollow: (id) => {
    return axios.delete(
      `https://social-network.samuraijs.com/api/1.0/follow/${id}`,
      {
        withCredentials: true,
        headers: {
          "API-KEY": myOWnApiKey,
        },
      }
    );
  },
};
