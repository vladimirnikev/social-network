const CREATE_MESSAGE = 'CREATE-MESSAGE'
const UPDATE_MEESAGE_TEXT = 'UPDATE-MESSAGE-TEXT'

export const createMessageActionCreator = (value) => ({
    type: CREATE_MESSAGE, value
})

export const updateMessageTextActionCreator = (text) => ({
    type: UPDATE_MEESAGE_TEXT, textMessage: text
})

let initialState = {
    dialogs: [
        { id: 1, user: 'Vladimir Nikev' },
        { id: 2, user: 'Anna Zakharchuk' },
        { id: 3, user: 'Ivan Kiskin' },
        { id: 4, user: 'Vladislav Gatsenko' },
        { id: 5, user: 'Yuriy Ovcharenko' },
        { id: 6, user: 'Rustam Abduloev' }
    ],
    messages: [
        { id: 1, message: "Hello" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "Nice" },
        { id: 4, message: "React - cool" }
    ],

}

const messagesReducer = (state = initialState, action) => {

    switch (action.type) {

        case CREATE_MESSAGE:

            let newMessage = {
                id: 5,
                message: action.value
            }

            return {
                ...state,
                messages: [...state.messages, newMessage]
            }

        case UPDATE_MEESAGE_TEXT:

            return {
                ...state,
                messageText: action.textMessage
            }

        default:
            return state
    }
}

export default messagesReducer