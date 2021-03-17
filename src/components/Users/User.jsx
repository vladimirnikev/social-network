import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Users.module.css'
import userImg from '../../assets/img/user.png'

const User = ({ user, followingInProgress, unfollowUser, followUser }) => {

    return (
        <div className={s.card}>
            <div>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : userImg} alt="img" />
                </NavLink>
                <div>
                    {user.followed
                        ? <button disabled={followingInProgress.some(el => el === user.id)} onClick={() => { unfollowUser(user.id) }}>Unfollow</button>
                        : <button disabled={followingInProgress.some(el => el === user.id)} onClick={() => { followUser(user.id) }}>Follow</button>
                    }
                </div>
            </div>
            <div className={s.wrapper}>
                <span>{user.name}</span>
                <span>{'u.status'}</span>
                <span>{'u.place.country'}</span>
                <span>{'u.place.city'}</span>
            </div>
        </div>)
}

export default User