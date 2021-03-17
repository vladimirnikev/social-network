import React from 'react'
import Messages from './Messages'
import { createMessageActionCreator, updateMessageTextActionCreator } from '../../redux/messagesReducer'
import { connect } from 'react-redux'
import withRedirect from '../hoc/withRedirect'
import { compose } from 'redux'
import { getDialogs, getMessages, getMessageText } from '../../redux/messages-selector'

class MessagesContainer extends React.Component {

    render() {
        return (<Messages {...this.props} />)
    }
}

let mapStateToProps = (state) => {
    return {
        dialogs: getDialogs(state),
        messages: getMessages(state),
        messageText: getMessageText(state),
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (value) => {
            dispatch(createMessageActionCreator(value))
        },
        changeMessage: (text) => {
            dispatch(updateMessageTextActionCreator(text))
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRedirect
)(MessagesContainer)