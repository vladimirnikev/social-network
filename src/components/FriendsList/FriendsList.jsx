import React from 'react'
import s from './FriendsList.module.css'

const FriendsList = (props) => {
    let friendsArray = props.friends.map((friend) => <span key={friend.id}>{friend.friend}</span>)

    return (
        <div className={s.list}>
            {friendsArray}
        </div>
    )
}

export default FriendsList 