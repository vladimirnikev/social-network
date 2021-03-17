import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { createPostActionCreator, getProfile, getStatus, setStatus } from './../../redux/profileReducer'
import { setUserAuth } from './../../redux/authReducer'
import { withRouter } from 'react-router-dom'
import withRedirect from '../hoc/withRedirect'
import { compose } from 'redux'
import { getMainUserId, getPosts, getUserData, getUserStatus } from '../../redux/profile-selector'

class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.mainId
        }

        this.props.getProfile(userId)
    }

    render() {
        return <Profile {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    posts: getPosts(state),
    userData: getUserData(state),
    status: getUserStatus(state),
    mainId: getMainUserId(state)
})

export default compose(
    connect(
        mapStateToProps,
        {
            createPost: createPostActionCreator,
            setUserAuth, getProfile,
            getStatus, setStatus
        }),
    withRouter,
    withRedirect
)(ProfileContainer)

