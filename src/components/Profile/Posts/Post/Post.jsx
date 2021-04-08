import { IconButton, Typography } from '@material-ui/core';
import React from 'react'
import s from './Post.module.css'
import userImg from './../../../../assets/img/user.png'
import FavoriteIcon from '@material-ui/icons/Favorite';


const Post = ({ text, likeCounter, photo, ...props }) => {

    return (

        // СДЕЛАТЬ КАРТОЧКУ ПОСТА

        <div className={s.item}>
            <img src={props.userData.photos.small !== null ? props.userData.photos.small : userImg} alt="avatar" />
            <div className={s.textWrapper}>
                <Typography variant='subtitle1' color='primary'>{props.userData.fullName}</Typography>
                <Typography variant='body1'>{text}</Typography>
                <div className={s.buttonWrapper}>
                    <IconButton color="primary">
                        <FavoriteIcon fontSize='small' />
                        <Typography className={s.buttonText} variant='caption'>{likeCounter}</Typography>
                    </IconButton>
                </div>
            </div>
        </div >
    )
}

export default Post;