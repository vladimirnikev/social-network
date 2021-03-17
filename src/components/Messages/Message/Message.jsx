import s from './Message.module.css'

const Message = ({ message }) => {
    return (
        <div className={s.item}>{message}</div>
    )
}

export default Message