import React from 'react'
import s from './Users.module.css'
import User from './User';
import Paginator from '../common/Paginator/Paginator';
import Preloader from '../common/Preloader/Preloader';

let Users = (props) => {
    return (
        <div>
            <Paginator currentPage={props.currentPage} onChanged={props.onChanged} pageSize={props.pageSize} itemsCount={props.usersCount} />
            {props.isFetching ? <Preloader /> : <div>
                <h2>Users</h2>
                <div>
                    {props.users.map(u => <User key={u.id} user={u} {...props} />
                    )}

                </div>
            </div>
            }
        </div>
    )
}

export default Users