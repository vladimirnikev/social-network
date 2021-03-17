import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

let mapStateToProps = (state) => {
    return {
        isLogin: state.auth.isLogin
    }
}

const withRedirect = (Component) => {

    let RedirectComponent = (props) => {

        if (!props.isLogin) return <Redirect to={'/login'} />

        return (
            <Component {...props} />
        )

    }
    let connectedAuthRedirect = connect(mapStateToProps)(RedirectComponent)

    return connectedAuthRedirect
}

export default withRedirect