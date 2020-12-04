import axios from "axios";
import { LoginData } from '../redux/reducers/authReducer'
import { ProfileType } from "../redux/reducers/profilePageReducer";
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
  follow: (id: number) => instanse.post(`follow/${id}`),
  unfollow: (id: number) => instanse.delete(`follow/${id}`),
  getProfile: (id: number) => {
    console.warn("устаревший АПИ");
    return profileApi.getProfile(id);
  },
};
type authResponseType = {
  data: {
    id: number
    email: string
    login: string
  }
  resultCode: number
}
type LoginResponseType = {
  email: string
  password: string
  rememberMe: (boolean)
  captcha: (boolean)

}
type LogoutResponseType = {
  resultCode: number
  messages: Array<string>
  data: {}
}
type UpdateStatusType = {
  resultCode: number
  messages: Array<string>
  data: {}
}
type SavePhotoType = {
  resultCode: number
  messages: Array<string>
  data: {
    photos: {
      small: string
      large: string
    }
  }
}
export const authApi = {
  auth: () => instanse.get<authResponseType>(`auth/me`),
  login: ({ email, password, rememberMe, captcha }: LoginData) =>
    instanse.post<authResponseType>("/auth/login", { email, password, rememberMe, captcha }),
  logout: () => instanse.delete<LogoutResponseType>("/auth/login"),
  getCaptcha: () => instanse.get(`security/get-captcha-url`)
};
export const profileApi = {
  getProfile: (id: number) => instanse.get<ProfileType>(`profile/${id}`),
  getStatus: (id: number) => instanse.get<string>(`profile/status/${id}`),
  updateStatus: (status: string) => instanse.put<UpdateStatusType>(`profile/status`, { status }),
  savePhoto: async (file: any) => {
    const formData = new FormData();
    formData.append("image", file);
    let data = await instanse.put<SavePhotoType>(`profile/photo`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    return data.data.data.photos
  },
  //@ts-ignore
  saveProfile: (profile) => instanse.put('profile', { ...profile }),

};
