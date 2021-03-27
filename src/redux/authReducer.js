import { stopSubmit } from 'redux-form'
import { authAPI, securityAPI } from './../api/api'

const SET_USER_DATA_AUTH = 'SET_USER_DATA_AUTH'
const GET_CAPTCHA_SUCCESS = 'GET_CAPTCHA_SUCCESS'

let initialState = {
    userId: null,
    login: null,
    email: null,
    isLogin: false,
    captchaUrl: null
}

let authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA_AUTH:
            return {
                ...state, ...action.data
            }

        case GET_CAPTCHA_SUCCESS:
            return {
                ...state, captchaUrl: action.url
            }

        default:
            return state
    }

}

export const setUserAuthSuccess = (userId, login, email, isLogin) => ({
    type: SET_USER_DATA_AUTH, data: { userId, login, email, isLogin }
})

export const getCaptchaSuccess = (url) => ({
    type: GET_CAPTCHA_SUCCESS, url
})

export const setUserAuth = () =>
    async (dispatch) => {

        let data = await authAPI.authUser()
        if (data.resultCode === 0) {
            let { id, login, email } = data.data
            dispatch(setUserAuthSuccess(id, login, email, true))
        }
    }

export const loginUser = (email, password, remeberMe, captcha) =>
    async (dispatch) => {

        let data = await authAPI.loginUser(email, password, remeberMe, captcha)
        if (data.resultCode === 0) {
            dispatch(setUserAuth())
        }
        else {
            if (data.resultCode === 10) {
                dispatch(getCaptchaUrl())
            }
            dispatch(stopSubmit('login', {
                _error: data.messages[0]
            }))
        }
    }

export const logout = () =>
    async (dispatch) => {
        let data = await authAPI.logoutUser()
        if (data.resultCode === 0) {
            console.log('LOGOUT')
            dispatch(setUserAuthSuccess(null, null, null, false))
        }
    }

export const getCaptchaUrl = () =>
    async (dispatch) => {
        let data = await securityAPI.getCaptcha()
        dispatch(getCaptchaSuccess(data.url))
    }


export default authReducer