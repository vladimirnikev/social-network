import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { createPostActionCreator, getProfile, getStatus, setStatus, refreshAvatar, sendUserInfo } from './../../redux/profileReducer'
import { setUserAuth } from './../../redux/authReducer'
import { withRouter } from 'react-router-dom'
import withRedirect from '../hoc/withRedirect'
import { compose } from 'redux'
import { getMainUserId, getPosts, getUserData, getUserStatus } from '../../redux/profile-selector'

class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.mainId
        }
        this.props.getProfile(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return <Profile {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    posts: getPosts(state),
    userData: getUserData(state),
    status: getUserStatus(state),
    isToggle: state.profilePage.isToggle,
    errorMessage: state.profilePage.errorMessage,
    mainId: getMainUserId(state),
    statusUpdateError: state.profilePage.statusUpdateError,
    isToggleStatus: state.profilePage.isToggleStatus
})

export default compose(
    connect(
        mapStateToProps,
        {
            createPost: createPostActionCreator,
            setUserAuth, getProfile,
            getStatus, setStatus, refreshAvatar, sendUserInfo
        }),
    withRouter,
    withRedirect
)(ProfileContainer)

