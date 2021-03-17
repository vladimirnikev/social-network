import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux';

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

    return (<>
        {
            !isToggle
                ? <span onClick={openStatusForm}>{props.status || 'New status'}</span>
                : <input autoFocus value={status} onChange={changeStatus} onBlur={closeStatusForm} type="text" />
        }
    </>
    )
}

compose(
    withRouter
)(ProfileStatus)

export default ProfileStatus

