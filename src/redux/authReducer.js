import { stopSubmit } from 'redux-form'
import { authAPI } from './../api/api'

const SET_USER_DATA_AUTH = 'SET_USER_DATA_AUTH'

let initialState = {
    userId: null,
    login: null,
    email: null,
    isLogin: false,
}

let authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA_AUTH:
            return {
                ...state, ...action.data
            }
        default:
            return state
    }

}

export const setUserAuthSuccess = (userId, login, email, isLogin) => ({
    type: SET_USER_DATA_AUTH, data: { userId, login, email, isLogin }
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

export default authReducer