export const getPosts = (state) => {
    return state.profilePage.posts
}

export const getUserData = (state) => {
    return state.profilePage.userData
}

export const getUserStatus = (state) => {
    return state.profilePage.userStatus
}

export const getMainUserId = (state) => {
    return state.auth.userId
}