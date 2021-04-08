import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Users.module.css'
import userImg from '../../assets/img/user.png'
import { Button, Typography } from '@material-ui/core'

const User = ({ user, followingInProgress, unfollowUser, followUser }) => {

    return (
        <div className={s.card}>
            <div>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : userImg} alt="img" />
                </NavLink>
            </div>
            <Typography variant='h6'>{user.name}</Typography>
            <div>
                {user.followed
                    ? <Button variant='contained' color='primary' disabled={followingInProgress.some(el => el === user.id)} onClick={() => { unfollowUser(user.id) }}>Unfollow</Button>
                    : <Button variant='outlined' color='primary' disabled={followingInProgress.some(el => el === user.id)} onClick={() => { followUser(user.id) }}>Follow</Button>
                }
            </div>
            {/* <div className={s.cardWrapper}>

                <span>{'u.status'}</span>
                <span>{'u.place.country'}</span>
                <span>{'u.place.city'}</span>
            </div> */}
        </div>)
}

export default User