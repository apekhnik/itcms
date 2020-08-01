import * as axios from 'axios'

export  const usersApi = {
    getUsers: (currentPage = 1,pageSize =5)=>{
      return  axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,
        {withCredentials: true}
      )
    },
    follow: (id) => {
        return     axios
        .post(
          `https://social-network.samuraijs.com/api/1.0/follow/${id}`,
          {},
          {
            withCredentials: true,
            headers: {
              "API-KEY": "b064f3c9-7a94-4bd3-b37d-8b05c39f7bf0",
            },
          }
        )
    },
    unfollow: (id) => {
      return  axios
      .delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
        withCredentials: true,
        headers: {
          "API-KEY": "b064f3c9-7a94-4bd3-b37d-8b05c39f7bf0",
        },
      })
    }
}