import React from 'react'
import s from './Users.module.css'
import User from './User';
import Preloader from '../common/Preloader/Preloader';
import Pagination from '@material-ui/lab/Pagination';
import { Typography } from '@material-ui/core';

let Users = (props) => {
    const handleChange = (event, value) => {
        props.onChanged(value);
    }

    return (
        <div className={s.usersContent}>
            {/* <Paginator currentPage={props.currentPage} onChanged={props.onChanged} pageSize={props.pageSize} itemsCount={props.usersCount} /> */}
            <Typography variant='h4'>Users list</Typography>

            {props.isFetching ? <Preloader />
                : <div className={s.itemsList}>
                    {props.users.map(u => <User key={u.id} user={u} {...props} />
                    )}

                </div>
            }
            <Pagination className={s.pagination} onChange={handleChange} page={props.currentPage} count={Math.ceil(props.usersCount / props.pageSize)} />
        </div>
    )
}

export default Users