import messagesReducer from './messagesReducer'
import profileReducer from './profileReducer'

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 0, text: 'Отличный выдался денек!', likeCounter: '138' },
                { id: 1, text: 'Победа', likeCounter: '83' },
                { id: 2, text: 'Кек', likeCounter: '12' },
                { id: 3, text: 'Лол', likeCounter: '7' },
                { id: 4, text: 'React - пушка', likeCounter: '999' }
            ],
            postText: ''
        },
        messagesPage: {
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
            messageText: ''
        },

        sidebar: {
            friends: [
                { id: 1, friend: 'Vladimir Nikev' },
                { id: 2, friend: 'Anna Zakharchuk' },
                { id: 3, friend: 'Ivan Kiskin' },
                { id: 4, friend: 'Vladislav Gatsenko' },
                { id: 5, friend: 'Rustam Abduloev' },
            ]
        }
    },
    _render() {
        console.log('i don^t have function ')
    },

    subscribe(observer) {
        this._render = observer
    },
    getState() {
        return this._state
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action)

        this._render(this._state)
    }
}

export default store