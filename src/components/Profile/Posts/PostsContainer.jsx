import React from 'react'
import Posts from './Posts'
import { connect } from "react-redux";
import { createPostActionCreator } from '../../../redux/profileReducer'

class PostsContainer extends React.Component {
    render() {
        return <Posts {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        userData: state.profilePage.userData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        createPost: (value) => {
            dispatch(createPostActionCreator(value))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);