import s from './Dialog.module.css'
import { NavLink } from 'react-router-dom'

const Dialog = ({ id, user, message }) => {
    return (
        <div className={s.item}>
            <NavLink to={'/messages/' + id}>
                <span>{user}</span>
                <span>{message}</span>
            </NavLink>
        </div >
    )
}

export default Dialog;