import Preloader from '../../common/Preloader/Preloader'
import ProfileStatus from '../ProfileStatus'
import s from './ProfileInfo.module.css'
import style from './../../Login/Login.module.css'
import userImg from '../../../assets/img/user.png'
import { useState } from 'react'
import { Field, FormSection, reduxForm } from 'redux-form'
import { InputProfileInfoCheckbox, Textarea } from '../../common/FormsControls/FormsControls'
import { Button, TextField, Typography } from '@material-ui/core'
import { Input } from './../../common/FormsControls/FormsControls'
import { link, required } from '../../../util/validators/validators'

const ProfileInfo = (props) => {
    // if (!props.userData) {
    //     return <Preloader />
    // }

    let sendImage = (e) => {
        props.refreshAvatar(e.target.files[0])
    }

    return (
        <div className={s.infoBlock}>

            <div className={s.imageWrapper}>
                {<img alt='avatar' src={props.userData.photos.large !== null ? props.userData.photos.large : userImg} />}
                {!props.userId
                    ? <div><input
                        accept="image/*"
                        className={s.statusInput}
                        id="contained-button-file"
                        multiple
                        type="file"
                        onChange={sendImage}
                    />
                        <label htmlFor="contained-button-file">
                            <Button variant="contained" color="primary" component="span">
                                Change Photo
                            </Button>
                        </label></div>
                    : null}
            </div>
            <div className={s.mainContentWrapper}>
                <Typography variant='h6'>{props.userData.fullName}</Typography>

                <ProfileStatus setStatus={props.setStatus} getStatus={props.getStatus}
                    status={props.status} mainId={props.mainId} userId={props.userId}
                    statusUpdateError={props.statusUpdateError} isToggleStatus={props.isToggleStatus} />

                <ProfileListInfo {...props} />
            </div>


        </div>
    )
}

const ProfileListInfo = (props) => {

    let [editMode, setEditMode] = useState(false)

    let openEditForm = () => {
        setEditMode(true)
    }

    let onSubmit = (obj) => {
        props.sendUserInfo(obj)
    }

    return <div className={s.contentInfo}>
        {!editMode
            ? <div>
                <Typography variant='body1'><b>About me:</b> {props.userData.aboutMe}</Typography>
                <div>
                    <Typography variant='body1'><b>Facebook:</b> {props.userData.contacts.facebook ? props.userData.contacts.facebook : '-'}</Typography>
                    <Typography variant='body1'><b>Website:</b> {props.userData.contacts.website ? props.userData.contacts.website : '-'}</Typography>
                    <Typography variant='body1'><b>VK:</b> {props.userData.contacts.vk ? props.userData.contacts.vk : '-'}</Typography>
                    <Typography variant='body1'><b>Twitter:</b> {props.userData.contacts.twitter ? props.userData.contacts.twitter : '-'}</Typography>
                    <Typography variant='body1'><b>Instagram:</b> {props.userData.contacts.instagram ? props.userData.contacts.instagram : '-'}</Typography>
                    <Typography variant='body1'><b>Youtube:</b> {props.userData.contacts.youtube ? props.userData.contacts.youtube : '-'}</Typography>
                    <Typography variant='body1'><b>GitHub:</b> {props.userData.contacts.github ? props.userData.contacts.github : '-'}</Typography>
                    <Typography variant='body1'><b>Link:</b> {props.userData.contacts.mainLink ? props.userData.contacts.mainLink : '-'}</Typography>
                </div>
                <Typography variant='body1'><b>Open to work:</b> {props.userData.lookingForAJob ? "Yes" : 'No'}</Typography>
                <Typography variant='body1'><b>About my work expirience:</b> {props.userData.lookingForAJobDescription}</Typography>
                {props.errorMessage && <div className={style.error}>{props.errorMessage}</div>}
            </div>
            : <ProfileEditForm errorMessage={props.errorMessage} initialValues={props.userData} onSubmit={onSubmit} />
        }
        {!props.userId && !editMode ? <Button variant='outlined' color='primary' onClick={openEditForm}>Edit profile info</Button> : null}
    </div>
}

let ProfileEditForm = (props) => {

    return <form onSubmit={props.handleSubmit}>

        <div>
            <Field name='fullName' label='Full Name' validate={[required]} component={Input} />
        </div>
        <div>
            <Field name='lookingForAJob' type='checkbox' label='Looking for a job?' component={InputProfileInfoCheckbox} />
        </div>
        <div className={s.textareaWrapper}>
            <label className={s.textareaTitle} htmlFor='lookingForAJobDescription'>About my work expirience: </label>
            <Field name='lookingForAJobDescription' type='text' component={Textarea} />
        </div>
        <div className={s.textareaWrapper}>
            <label className={s.textareaTitle} htmlFor='aboutMe'>About me:</label>
            <Field name='aboutMe' type='text' validate={[required]} component={Textarea} />
        </div>

        <FormSection name='contacts'>
            <div>
                <Field name='facebook' label='Facebook' validate={[link]} component={Input} />
            </div>
            <div>
                <Field name='website' label='Website' validate={[link]} component={Input} />
            </div>
            <div>
                <Field name='vk' label='VK' validate={[link]} component={Input} />
            </div>
            <div>
                <Field name='twitter' label='Twitter' validate={[link]} component={Input} />
            </div>
            <div>
                <Field name='instagram' label='Instagram' validate={[link]} component={Input} />
            </div>
            <div>
                <Field name='youtube' label='Youtube' validate={[link]} component={Input} />
            </div>
            <div>
                <Field name='github' label='GitHub' validate={[link]} component={Input} />
            </div>
            <div>
                <Field name='mainLink' label='Link' validate={[link]} component={Input} />
            </div>
        </FormSection>
        {props.errorMessage && <div className={style.error}>{props.errorMessage}</div>}
        <Button className={s.formButton} variant='contained' color='primary' type='submit'>Submit</Button>
    </form>

}

ProfileEditForm = reduxForm({
    form: 'profile-edit-form'
})(ProfileEditForm)

export default ProfileInfo