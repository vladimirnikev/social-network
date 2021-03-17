import Preloader from '../../common/Preloader/Preloader'
import ProfileStatus from '../ProfileStatus'
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    if (!props.userData) {
        return <Preloader />
    }

    return (
        <div className={s.infoBlock}>
            <ProfileStatus setStatus={props.setStatus} getStatus={props.getStatus} status={props.status} mainId={props.mainId} userId={props.userId} />

            <img alt='avatar' src={props.userData.photos.large} />
            <p>{props.userData.fullName}</p>
            <p>{props.userData.aboutMe}</p>
            <div>
                <p>Contacts</p>
                <ul>
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

            <p>description</p>
        </div>
    )
}

export default ProfileInfo