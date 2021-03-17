import { createStore, combineReducers, applyMiddleware } from "redux";
import profileReducer from './profileReducer'
import messagesReducer from './messagesReducer'
import sidebarReducer from './sidebarReducer'
import usersReducer from './usersReducer'
import authReducer from './authReducer'
import appReducer from './appReducer'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import { composeWithDevTools } from 'redux-devtools-extension'




let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})
// let store = createStore(reducers, applyMiddleware(thunkMiddleware))

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunkMiddleware)
));


export default store