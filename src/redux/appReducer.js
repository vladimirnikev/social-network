import { setUserAuth } from "./authReducer"

const SET_INITIALIZED = 'SET_INITIALIZED'
const GLOBAL_PROMISE_ERROR = 'GLOBAL_PROMISE_ERROR'

let initialState = {
    initialized: false,
    globalPromiseError: null
}

let appReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state, initialized: true
            }

        case GLOBAL_PROMISE_ERROR:
            return {
                ...state, globalPromiseError: action.reason
            }
        default:
            return state
    }

}

export const setInitialized = () => ({
    type: SET_INITIALIZED
})

export const showError = (reason) => ({
    type: GLOBAL_PROMISE_ERROR, reason
})

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(setUserAuth())

    Promise.all([promise])
        .then(() => {
            dispatch(setInitialized())
        })
}


export default appReducer