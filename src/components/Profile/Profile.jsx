import PostsContainer from './Posts/PostsContainer'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

    return (
        <main>
            <ProfileInfo setStatus={props.setStatus} getStatus={props.getStatus} status={props.status} userId={props.match.params.userId} mainId={props.mainId} userData={props.userData} />
            <PostsContainer />
        </main>
    );
}


export default Profile;