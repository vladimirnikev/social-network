import s from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
import FriendsList from '../FriendsList/FriendsList'

const Navbar = (props) => {
    return (
        <nav className={s.nav}>
            <ul className={s.list}>
                <li><NavLink to='/profile' activeClassName={s.activeLink} className={s.link}>Profile</NavLink></li>
                <li><NavLink to='/messages' activeClassName={s.activeLink} className={s.link}>Messages</NavLink></li>
                <li><NavLink to='/users' activeClassName={s.activeLink} className={s.link}>Users</NavLink></li>
                <li><NavLink to='/news' activeClassName={s.activeLink} className={s.link}>News</NavLink></li>
                <li><NavLink to='/music' activeClassName={s.activeLink} className={s.link}>Music</NavLink></li>
                <li><NavLink to='/settings' activeClassName={s.activeLink} className={s.link}>Settings</NavLink></li>
            </ul>
            <FriendsList friends={props.friends} />
        </nav>
    );
}

export default Navbar;