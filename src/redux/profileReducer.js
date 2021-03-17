import { profileAPI } from './../api/api'

const CREATE_POST = 'CREATE-POST'
const CHANGE_USER_DATA = 'CHANGE_USER_DATA'
const CHANGE_STATUS = 'CHANGE_STATUS'

export const createPostActionCreator = (post) => ({
    type: CREATE_POST, post
})

export const changeUserData = (userData) => ({
    type: CHANGE_USER_DATA, userData
})

export const changeStatus = (status) => ({
    type: CHANGE_STATUS, status
})

export const getProfile = (userId) =>
    async (dispatch) => {

        let data = await profileAPI.getProfile(userId);
        dispatch(changeUserData(data))
    }

export const getStatus = (userId) =>
    async (dispatch) => {

        let data = await profileAPI.getUserStatus(userId)
        if (data) {
            dispatch(changeStatus(data))
        }
    }

export const setStatus = (status) =>
    async (dispatch) => {

        let data = await profileAPI.setUserStatus(status)
        if (data.resultCode === 0) {
            dispatch(changeStatus(status))
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
    userStatus: ''
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

        default:
            return state
    }
}

export default profileReducer
