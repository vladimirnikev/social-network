let initialState = {
    friends: [
        { id: 1, friend: 'Vladimir Nikev' },
        { id: 2, friend: 'Anna Zakharchuk' },
        { id: 3, friend: 'Ivan Kiskin' },
        { id: 4, friend: 'Vladislav Gatsenko' },
        { id: 5, friend: 'Rustam Abduloev' },
    ]
}

let sidebarReducer = (state = initialState, action) => {
    let newState = { ...state }
    return newState
}

export default sidebarReducer