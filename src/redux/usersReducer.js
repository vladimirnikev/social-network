import { usersAPI } from './../api/api'

const SHOW_MORE_USERS = 'SHOW-MORE-USERS'
const FOLLOW_USER = 'FOLLOW_USER'
const UNFOLLOW_USER = 'UNFOLLOW_USER'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_USERS_COUNT = 'SET_USERS_COUNT'
const SET_FETCHING = 'SET_FETCHING'
const TOGGLE_BUTTON_CLICK = 'TOGGLE_BUTTON_CLICK'

// export const showMoreUsers = () => ({
//     type: SHOW_MORE_USERS
// })

export const followUserSuccess = (userId) => ({
    type: FOLLOW_USER, userId
})

export const unfollowUserSuccess = (userId) => ({
    type: UNFOLLOW_USER, userId
})

export const setUsers = (users) => ({
    type: SET_USERS, users
})

export const setPageSuccess = (currentPage) => ({
    type: SET_CURRENT_PAGE, currentPage
})

export const setUsersCount = (usersCount) => ({
    type: SET_USERS_COUNT, usersCount
})

export const setFetching = (isFetching) => ({
    type: SET_FETCHING, isFetching
})

export const toggleButtonClick = (userId, isFetching) => ({
    type: TOGGLE_BUTTON_CLICK, userId, isFetching
})


export const getUsers = (currentPage, pageSize) =>
    async (dispatch) => {

        dispatch(setFetching(true))
        let data = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(setFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setUsersCount(data.totalCount))
    }

export const setPage = (currentPage, pageSize) =>
    async (dispatch) => {
        dispatch(setFetching(true))
        dispatch(setPageSuccess(currentPage))
        let data = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(setUsers(data.items))
        dispatch(setFetching(false))
    }

const followOrUnfollow = async (followingRequest, followingUserSuccess, userId, dispatch) => {
    dispatch(toggleButtonClick(userId, true))
    let data = await followingRequest(userId)
    if (data.resultCode === 0) {
        dispatch(followingUserSuccess(userId))
    }
    dispatch(toggleButtonClick(userId, false))
}

export const followUser = (userId) =>
    async (dispatch) => {
        let followingRequest = usersAPI.followUser
        let followingUserSuccess = followUserSuccess

        followOrUnfollow(followingRequest, followingUserSuccess, userId, dispatch)
    }

export const unfollowUser = (userId) =>
    async (dispatch) => {
        let followingRequest = usersAPI.unfollowUser
        let followingUserSuccess = unfollowUserSuccess

        followOrUnfollow(followingRequest, followingUserSuccess, userId, dispatch)
    }


let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USERS:
            return {
                ...state, users: [...action.users]

            }

        case FOLLOW_USER:
            return {
                ...state,
                users: state.users.map(u => {

                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u
                })

            }

        case UNFOLLOW_USER:
            return {
                ...state,
                users: state.users.map(u => {

                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            }

        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }

        case SET_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.usersCount
            }

        case SET_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case TOGGLE_BUTTON_CLICK:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : [state.followingInProgress.filter(e => e !== action.userId)]
            }

        default:
            return state
    }
}

export default usersReducer
