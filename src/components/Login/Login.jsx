import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { loginUser } from '../../redux/authReducer'
import { email, required } from '../../util/validators/validators'
import { Input } from '../common/FormsControls/FormsControls'
import s from './Login.module.css'

let LoginForm = (props) => {
    debugger
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <label htmlFor='email'>Login:</label>
                <Field placeholder='Email' name='email' type='text' validate={[required, email]} component={Input} />
            </div>

            <div>
                <label htmlFor='password'>Password:</label>
                <Field name='password' type='password' validate={[required]} component={Input} />
            </div>

            <div>
                <label htmlFor='agree'> I agree with rules</label>
                <Field name='rememberMe' type='checkbox' component={Input} />
            </div>
            {props.captcha && <div>
                <img alt='captcha' src={props.captcha} />
                <Field name='captcha' type='text' component='input' />
            </div>}

            {props.error && <div className={s.error}>{props.error}</div>}
            <button type='submit' disabled={props.submitting}>Submit</button>
        </form>
    )
}



let mapStateToProps = (state) => {
    return {
        isLogin: state.auth.isLogin,
        captcha: state.auth.captchaUrl
    }
}

LoginForm = reduxForm({
    form: 'login'
})(LoginForm)


const Login = (props) => {

    let onSubmit = ({ email, password, rememberMe, captcha }) => {
        props.loginUser(email, password, rememberMe, captcha)
    }

    if (props.isLogin) return <Redirect to={'/profile'} />

    return <>
        <h1>Login, please</h1>
        <LoginForm captcha={props.captcha} onSubmit={onSubmit} />
    </>
}

export default connect(mapStateToProps, { loginUser })(Login)