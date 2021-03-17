import React from 'react'
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';


const Header = ({ isLogin, login, logout, ...props }) => {
    return (
        <header className={s.header}>
            <img src='https://vsetreningi.ru/avatars/objects/8-1539_1_6.jpg?7a3135fcd5210906b1ab7814f42fa4b7' alt='logo'></img>

            <div>
                {isLogin
                    ? <div>{login} <button onClick={logout}>Logout</button></div>
                    : <NavLink to='/login'>Login</NavLink>}

            </div>
        </header>
    );
}

export default Header;

// СТРОЙ СВОЮС 