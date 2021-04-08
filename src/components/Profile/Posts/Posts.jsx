import { Button, Typography } from '@material-ui/core'
import React from 'react'
import { Field, reduxForm } from 'redux-form'
// import { required, maxLength } from '../../../util/validators/validators'
import { Textarea } from '../../common/FormsControls/FormsControls'
import Post from './Post/Post'
import s from './Posts.module.css'


let PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field placeholder='Post' name='post' type='text' component={Textarea} />
            <Button variant='contained' color='primary' type='submit'>Add post</Button>
        </form>
    )
}

PostForm = reduxForm({ form: 'post' })(PostForm)

const Posts = React.memo((props) => {
    let postsArray = props.posts.map(post => <Post
        key={post.id}
        userData={props.userData}
        likeCounter={post.likeCounter}
        text={post.text} />)

    let addPost = (value) => {
        props.createPost(value.post)
    }

    return (
        <div className={s.postsRoot}>
            <Typography variant='h5' className={s.postsTitle}>Posts</Typography>
            <div className={s.addPostWrapper}>
                <PostForm onSubmit={addPost} />
            </div>
            <div className={s.postsWrapper}>
                {postsArray}
            </div>
        </div >
    );
})

export default Posts;