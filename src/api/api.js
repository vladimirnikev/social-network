import * as axios from 'axios'

const instanceApi = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: { 'API-KEY': '460f09c7-f89f-4a29-b472-f16600dc0c8d' }
})

export const usersAPI = {

    getUsers(currentPage, pageSize) {
        return instanceApi.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },

    followUser(userId) {
        return instanceApi.post(`follow/${userId}`)
            .then(response => response.data)
    },

    unfollowUser(userId) {
        return instanceApi.delete(`follow/${userId}`)
            .then(response => response.data)
    }

}

export const profileAPI = {

    getProfile(userId) {
        return instanceApi.get(`profile/${userId}`)
            .then(response => response.data)
    },

    getUserStatus(userId) {

        return instanceApi.get(`profile/status/${userId}`)
            .then(response => response.data)
    },

    setUserStatus(status) {

        return instanceApi.put(`profile/status`, { status: status })
            .then(response => response.data)
    },

    sendImage(file) {
        let formData = new FormData()
        formData.append('image', file)

        return instanceApi.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => response.data)
    },

    setUserData(data) {
        return instanceApi.put(`profile`, data)
            .then(response => response.data)
    }
}

export const authAPI = {

    authUser() {
        return instanceApi.get(`auth/me`)
            .then(response => response.data)
    },

    loginUser(email, password, remeberMe, captcha) {
        return instanceApi.post(`auth/login`, { email: email, password: password, remeberMe: remeberMe, captcha: captcha })
            .then(response => response.data)
    },

    logoutUser() {
        return instanceApi.delete(`auth/login`)
            .then(response => response.data)
    }
}

export const securityAPI = {
    getCaptcha() {
        return instanceApi.get(`security/get-captcha-url`)
            .then(response => response.data)
    }
}

