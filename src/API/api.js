import * as axios from "axios";
const myOWnApiKey = "087e00ab-1a73-418a-b6b3-241360fda320";
const instanse = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": myOWnApiKey,
  },
});
export const usersApi = {
  getUsers: (currentPage = 1, pageSize = 5) =>
    instanse.get(`users?page=${currentPage}&count=${pageSize}`),
  follow: (id) => instanse.post(`follow/${id}`),
  unfollow: (id) => instanse.delete(`follow/${id}`),
  getProfile: (id) => {
    console.warn("устаревший АПИ");
    return profileApi.getProfile(id);
  },
};
export const authApi = {
  auth: () => instanse.get(`auth/me`),
  login: ({ email, password, rememberMe }) =>
    instanse.post("/auth/login", { email, password, rememberMe }),
  logout: () => instanse.delete("/auth/login"),
  getCaptcha:() => instanse.get(`security/get-captcha-url`)
};
export const profileApi = {
  getProfile: (id) => instanse.get(`profile/${id}`),
  getStatus: (id) => instanse.get(`profile/status/${id}`),
  updateStatus: (status) => instanse.put(`profile/status`, { status }),
  savePhoto: (file) => {
    const formData = new FormData();
    formData.append("image", file);
    return instanse.put(`profile/photo`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  saveProfile: (profile) => instanse.put('profile', {...profile}),
  
};
