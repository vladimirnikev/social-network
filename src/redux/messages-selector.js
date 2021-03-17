import { createSelector } from "reselect"

export const getDialogsSelector = (state) => {
    return state.messagesPage.dialogs
}

export const getDialogs = createSelector(getDialogsSelector, (dialogs) => {
    return dialogs.filter((d) => d)
})

export const getMessages = (state) => {
    return state.messagesPage.messages
}

export const getMessageText = (state) => {
    return state.messagesPage.messageText
}