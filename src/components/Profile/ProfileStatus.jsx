import { Input, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux';
import Preloader from '../common/Preloader/Preloader';

let ProfileStatus = (props) => {
    let [isToggle, setIsToggle] = useState(false)
    let [status, setLocalStatus] = useState(props.status)

    useEffect(() => {
        setLocalStatus(props.status)
    }, [props.status])

    useEffect(() => {
        props.getStatus(props.userId || props.mainId)
    }, [props.userId, props.mainId])

    let openStatusForm = () => {
        setIsToggle(true)
    }

    let closeStatusForm = () => {
        props.setStatus(status)
        setIsToggle(false)
    }

    let changeStatus = (e) => {
        setLocalStatus(e.currentTarget.value)
    }

    if (props.isToggleStatus) {
        return <Preloader />
    } else {
        return (<>
            {
                !isToggle
                    ? <Typography variant='body2' onClick={!props.userId ? openStatusForm : null}>{props.status || '------'}</Typography>
                    : <Input autoFocus value={status} onChange={changeStatus} onBlur={closeStatusForm} type="text" />
            }
            {
                props.statusUpdateError && <div>Oops! Status wasn't update, something went wrong!</div>
            }
        </>
        )
    }
}

compose(
    withRouter
)(ProfileStatus)

export default ProfileStatus

