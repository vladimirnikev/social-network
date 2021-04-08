import React from 'react'
// import { Redirect } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { required } from '../../util/validators/validators'
import { Textarea } from '../common/FormsControls/FormsControls'
import withRedirect from '../hoc/withRedirect'
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'
import s from './Messages.module.css'

let MessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field placeholder='Message' name='message' type='text' component={Textarea} validate={[required]} />
            <button type='submit'>Send message</button>
        </form>
    )
}

MessageForm = reduxForm({ form: 'message' })(MessageForm)


const Messages = (props) => {

    let dialogsArray = props.dialogs.map(d => <Dialog key={d.id} id={d.id} user={d.user} />)

    let messagesArray = props.messages.map(m => <Message key={m.id} message={m.message} />)


    let sendMessage = (value) => {
        props.sendMessage(value.message)
    }

    return (
        <div className={s.content}>
            <div className={s.dialogs}>
                {dialogsArray}
            </div>
            <div className={s.messages}>
                {messagesArray}
            </div>
            <MessageForm onSubmit={sendMessage} />
        </div>
    )
}

export default withRedirect(Messages)