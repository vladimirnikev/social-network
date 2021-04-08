import Preloader from '../common/Preloader/Preloader';
import PostsContainer from './Posts/PostsContainer'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    // debugger
    if (!props.userData) {
        return <Preloader />
    }

    return (

        <>
            {!props.isToggle
                ? <ProfileInfo errorMessage={props.errorMessage} sendUserInfo={props.sendUserInfo}
                    setStatus={props.setStatus} getStatus={props.getStatus} status={props.status}
                    userId={props.match.params.userId} mainId={props.mainId} userData={props.userData}
                    refreshAvatar={props.refreshAvatar} statusUpdateError={props.statusUpdateError}
                    isToggleStatus={props.isToggleStatus} />
                : <Preloader />}
            <PostsContainer />
        </>
    );
}


export default Profile;