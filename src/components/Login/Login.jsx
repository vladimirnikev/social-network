import { Button, Typography } from '@material-ui/core'
import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { loginUser } from '../../redux/authReducer'
import { email, required } from '../../util/validators/validators'
import { InputLoginCheckbox, InputEmail, InputPassword } from '../common/FormsControls/FormsControls'
import s from './Login.module.css'

let LoginForm = (props) => {
    return (
        <form className={s.form} onSubmit={props.handleSubmit}>
            <div>
                <Field name='email' validate={[required, email]} component={InputEmail} />
            </div>

            <div className={s.inputWrapper}>
                <Field name='password' validate={[required]} component={InputPassword} />
            </div>

            <div className={s.inputWrapper}>
                <Field name='rememberMe' type='checkbox' component={InputLoginCheckbox} />
            </div>
            {props.captcha && <div>
                <img alt='captcha' src={props.captcha} />
                <Field name='captcha' type='text' component='input' />
            </div>}

            {props.error && <div className={s.error}>{props.error}</div>}
            {/* <button type='submit' disabled={props.submitting}>Submit</button> */}
            <Button type='submit' variant="contained" color="primary">Login</Button>
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
        <Typography variant='h3'>Login, please</Typography>
        <LoginForm captcha={props.captcha} onSubmit={onSubmit} />
    </>
}

export default connect(mapStateToProps, { loginUser })(Login)