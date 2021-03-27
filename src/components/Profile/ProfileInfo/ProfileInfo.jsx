import Preloader from '../../common/Preloader/Preloader'
import ProfileStatus from '../ProfileStatus'
import s from './ProfileInfo.module.css'
import style from './../../Login/Login.module.css'
import userImg from '../../../assets/img/user.png'
import { useState } from 'react'
import { Field, FormSection, reduxForm } from 'redux-form'

const ProfileInfo = (props) => {
    if (!props.userData) {
        return <Preloader />
    }

    let sendImage = (e) => {
        props.refreshAvatar(e.target.files[0])
    }

    return (
        <div className={s.infoBlock}>
            <ProfileStatus setStatus={props.setStatus} getStatus={props.getStatus}
                status={props.status} mainId={props.mainId} userId={props.userId}
                statusUpdateError={props.statusUpdateError} isToggleStatus={props.isToggleStatus} />
            {<img alt='avatar' src={props.userData.photos.large !== null ? props.userData.photos.large : userImg} />}
            {!props.userId ? <input onChange={sendImage} type='file' /> : null}
            <ProfileListInfo {...props} />
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
        // console.log(obj)
        // setEditMode(false)
    }

    return <div>

        {!props.userId && !editMode ? <button onClick={openEditForm}>Edit profile info</button> : null}


        {!editMode
            ? <div>
                <p>{props.userData.fullName}</p>
                <p>{props.userData.aboutMe}</p>
                <div>
                    <p>Contacts</p>
                    <ul>
                        {/* Components{Objectтprops.userData.contacts} */}
                        <li><span>Facebook: </span>{props.userData.contacts.facebook ? props.userData.contacts.facebook : '-'}</li>
                        <li><span>Website: </span>{props.userData.contacts.website ? props.userData.contacts.website : '-'}</li>
                        <li><span>VK: </span>{props.userData.contacts.vk ? props.userData.contacts.vk : '-'}</li>
                        <li><span>Twitter: </span>{props.userData.contacts.twitter ? props.userData.contacts.twitter : '-'}</li>
                        <li><span>Instagram: </span>{props.userData.contacts.instagram ? props.userData.contacts.instagram : '-'}</li>
                        <li><span>Youtube: </span>{props.userData.contacts.youtube ? props.userData.contacts.youtube : '-'}</li>
                        <li><span>GitHub: </span>{props.userData.contacts.github ? props.userData.contacts.github : '-'}</li>
                        <li><span>Link: </span>{props.userData.contacts.mainLink ? props.userData.contacts.mainLink : '-'}</li>
                    </ul>
                </div>
                <p>{props.userData.lookingForAJob ? 'Ищу работу' : 'Работаю'}</p>
                <p>{props.userData.lookingForAJobDescription}</p>
                {props.errorMessage && <div className={style.error}>{props.errorMessage}</div>}
            </div>
            : <ProfileEditForm errorMessage={props.errorMessage} initialValues={props.userData} onSubmit={onSubmit} />

        }
    </div>
}

let ProfileEditForm = (props) => {
    debugger
    return <form onSubmit={props.handleSubmit}>

        <div>
            <label htmlFor='fullName'>Full Name:</label>
            <Field name='fullName' type='text' component='input' />
        </div>
        <div>
            <label htmlFor='lookingForAJob'>Looking for a job?</label>
            <Field name='lookingForAJob' type='checkbox' component='input' />
        </div>
        <div>
            <label htmlFor='lookingForAJobDescription'>About my work expirience: </label>
            <Field name='lookingForAJobDescription' type='text' component='textarea' />
        </div>
        <div>
            <label htmlFor='aboutMe'>About me:</label>
            <Field name='aboutMe' type='text' component='textarea' />
        </div>

        <FormSection name='contacts'>
            <div>
                <label htmlFor='facebook'>Facebook:</label>
                <Field name='facebook' type='text' component='input' />
            </div>
            <div>
                <label htmlFor='website'>Website:</label>
                <Field name='website' type='text' component='input' />
            </div>
            <div>
                <label htmlFor='vk'>VK:</label>
                <Field name='vk' type='text' component='input' />
            </div>
            <div>
                <label htmlFor='twitter'>Twitter:</label>
                <Field name='twitter' type='text' component='input' />
            </div>
            <div>
                <label htmlFor='instagram'>Instagram:</label>
                <Field name='instagram' type='text' component='input' />
            </div>
            <div>
                <label htmlFor='youtube'>Youtube:</label>
                <Field name='youtube' type='text' component='input' />
            </div>
            <div>
                <label htmlFor='github'>GitHub:</label>
                <Field name='github' type='text' component='input' />
            </div>
            <div>
                <label htmlFor='mainLink'>Link:</label>
                <Field name='mainLink' type='text' component='input' />
            </div>
        </FormSection>
        {props.errorMessage && <div className={style.error}>{props.errorMessage}</div>}

        <button type='submit' disabled={props.submitting}>Submit</button>
    </form>

}

ProfileEditForm = reduxForm({
    form: 'profile-edit-form'
})(ProfileEditForm)

export default ProfileInfo