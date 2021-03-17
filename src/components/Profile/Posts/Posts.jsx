import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { required, maxLength } from '../../../util/validators/validators'
import { Textarea } from '../../common/FormsControls/FormsControls'
import Post from './Post/Post'
import s from './Posts.module.css'

let maxLength10 = maxLength(10)

let PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field placeholder='Post' name='post' type='text' component={Textarea} validate={[required, maxLength10]} />
            <button type='submit'>Add post</button>
        </form>
    )
}

PostForm = reduxForm({ form: 'post' })(PostForm)

const Posts = React.memo((props) => {

    let postsArray = props.posts.map(post => <Post key={post.id} likeCounter={post.likeCounter} text={post.text} />)

    let addPost = (value) => {
        props.createPost(value.post)
    }

    return (
        <div>
            <h2 className={s.postsTitle}>Posts</h2>
            <div className={s.addPostWrapper}>
                <PostForm onSubmit={addPost} />
            </div>
            <div>
                {postsArray}
            </div>
        </div >
    );
})

export default Posts;