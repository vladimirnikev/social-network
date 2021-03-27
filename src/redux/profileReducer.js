import { stopSubmit } from 'redux-form'
import { profileAPI } from './../api/api'

const CREATE_POST = 'CREATE-POST'
const CHANGE_USER_DATA = 'CHANGE_USER_DATA'
const CHANGE_STATUS = 'CHANGE_STATUS'
const SET_TOGGLE = 'SET_TOGGLE'
const REFRESH_AVATAR_SUCCESS = 'REFRESH_AVATAR_SUCCESS'
const SHOW_ERROR_MESSAGE = 'SHOW_ERROR_MESSAGE'
const UPDATE_STATUS_REJECT = 'UPDATE_STATUS_REJECT'
const SET_TOGGLE_STATUS = 'SET_TOGGLE_STATUS'

export const createPostActionCreator = (post) => ({
    type: CREATE_POST, post
})

export const changeUserData = (userData) => ({
    type: CHANGE_USER_DATA, userData
})

export const changeStatus = (status) => ({
    type: CHANGE_STATUS, status
})

export const showErrorMessage = (message) => ({
    type: SHOW_ERROR_MESSAGE, message
})

export const refreshAvatarSuccess = (photos) => ({
    type: REFRESH_AVATAR_SUCCESS, photos
})

export const refreshAvatar = (file) =>

    async (dispatch) => {

        dispatch(setToggle(true))
        let data = await profileAPI.sendImage(file);

        if (data.resultCode === 0) {
            dispatch(refreshAvatarSuccess(data.data.photos))
        }

        dispatch(setToggle(false))
    }

export const setToggle = (boolean) => ({
    type: SET_TOGGLE, boolean
})

export const setToggleStatus = (isToggle) => ({
    type: SET_TOGGLE_STATUS, isToggle
})

export const updateStatusReject = (withError) => ({
    type: UPDATE_STATUS_REJECT, withError
})

export const getProfile = (userId) =>
    async (dispatch) => {
        dispatch(setToggle(true))
        let data = await profileAPI.getProfile(userId);

        dispatch(changeUserData(data))
        dispatch(setToggle(false))

    }

export const getStatus = (userId) =>
    async (dispatch) => {
        try {
            dispatch(setToggleStatus(true))
            const data = await profileAPI.getUserStatus(userId)

            dispatch(changeStatus(data))
            dispatch(setToggleStatus(false))
        } catch {
            dispatch(updateStatusReject(true))
            dispatch(setToggleStatus(false))
        }
    }

export const sendUserInfo = (obj) =>

    async (dispatch, getState) => {
        const userId = getState().auth.userId
        dispatch(setToggle(true))
        const data = await profileAPI.setUserData(obj)

        if (data.resultCode === 0) {
            // dispatch(changeUserData(data))
            dispatch(showErrorMessage(null))
            dispatch(getProfile(userId))

        } else {
            dispatch(showErrorMessage(data.messages[0]))
            // dispatch(stopSubmit('profile-edit-form', { _error: data.messages[0] }))
        }

        const promiseError = getState().app.globalPromiseError
        dispatch(setToggle(false))
    }

export const setStatus = (status) =>
    async (dispatch) => {
        try {
            dispatch(setToggleStatus(true))
            let data = await profileAPI.setUserStatus(status)
            if (data.resultCode === 0) {
                dispatch(changeStatus(status))
                dispatch(updateStatusReject(false))
                dispatch(setToggleStatus(false))
            }
        } catch {
            dispatch(updateStatusReject(true))
            dispatch(setToggleStatus(false))
        }
    }

let initialState = {
    posts: [
        { id: 0, text: 'Отличный выдался денек!', likeCounter: '138' },
        { id: 1, text: 'Победа', likeCounter: '83' },
        { id: 2, text: 'Кек', likeCounter: '12' },
        { id: 3, text: 'Лол', likeCounter: '7' },
        { id: 4, text: 'React - пушка', likeCounter: '999' }
    ],
    userData: null,
    userStatus: '',
    isToggle: false,
    errorMessage: '',
    isToggleStatus: false,
    statusUpdateError: false
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case CREATE_POST:
            let newPost = {
                id: 5,
                text: action.post,
                likeCounter: 0
            }

            return {
                ...state,
                posts: [...state.posts, newPost]
            }

        case CHANGE_USER_DATA:

            return {
                ...state, userData: action.userData
            }

        case CHANGE_STATUS:

            return {
                ...state, userStatus: action.status
            }

        case SET_TOGGLE:

            return {
                ...state, isToggle: action.boolean
            }

        case REFRESH_AVATAR_SUCCESS:

            return {
                ...state, userData: { ...state.userData, photos: action.photos }
            }

        case SHOW_ERROR_MESSAGE:

            return {
                ...state, errorMessage: action.message
            }

        case UPDATE_STATUS_REJECT:

            return {
                ...state, statusUpdateError: action.withError
            }

        case SET_TOGGLE_STATUS:

            return {
                ...state, isToggleStatus: action.isToggle
            }

        default:
            return state
    }
}

export default profileReducer
