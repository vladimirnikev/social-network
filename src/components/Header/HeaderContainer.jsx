import React from 'react'
import Header from './Header';
import { connect } from 'react-redux'
import { logout } from './../../redux/authReducer';

class HeaderContainer extends React.Component {

    render = () => {
        return (
            <Header {...this.props} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
        login: state.auth.login,
        isLogin: state.auth.isLogin
    }
}

export default connect(mapStateToProps, { logout })(HeaderContainer)
