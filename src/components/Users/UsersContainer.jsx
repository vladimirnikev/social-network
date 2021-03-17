import React from 'react'
import { connect } from 'react-redux'
import Users from './Users'

import { followUser, unfollowUser, setPage, getUsers } from '../../redux/usersReducer'
import Preloader from '../common/Preloader/Preloader'
import withRedirect from '../hoc/withRedirect'
import { compose } from 'redux'


class UsersContainer extends React.Component {


    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onChanged = (currentPage) => {
        this.props.setPage(currentPage, this.props.pageSize)
    }

    onClickFollow = (userId) => {
        this.props.followUser(userId)
    }

    onClickUnfollow = (userId) => {
        this.props.unfollowUser(userId)
    }

    render() {
        return <>
            {/* {this.props.isFetching ? <Preloader /> : */}
            <Users
                usersCount={this.props.usersCount}
                pageSize={this.props.pageSize}
                onChanged={this.onChanged}
                currentPage={this.props.currentPage}
                unfollowUser={this.onClickUnfollow}
                followUser={this.onClickFollow}
                users={this.props.users}
                followingInProgress={this.props.followingInProgress}
                isFetching={this.props.isFetching}
            />
            {/* } */}
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        usersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default compose(
    connect(
        mapStateToProps,
        {
            followUser,
            unfollowUser,
            setPage,
            getUsers
        }),
    withRedirect
)(UsersContainer)