import React from 'react'
import s from './Post.module.css'


const Post = ({ text, likeCounter }) => {

    return (
        <div className={s.item}>
            <img src="https://www.belta.by/images/storage/news/with_archive/2020/000029_1579851115_377062_big.jpg" alt="avatar" />
            <div className={s.textWrapper}>
                <span>{text}</span>
                <span className={s.button}>Like {likeCounter}</span>
            </div>
        </div>
    )
}

export default Post;