import React from 'react'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux';

class ProfileStatusClass extends React.Component {
    state = {
        status: this.props.status,
        isToggle: false,
    }

    componentDidMount() {
        if (!this.props.userId) {
            this.props.getStatus(this.props.mainId)
        } else {
            this.props.getStatus(this.props.userId)
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }


    openStatusForm = () => {
        this.setState({
            isToggle: true
        })
    }

    closeStatusForm = () => {
        this.props.setStatus(this.state.status)

        this.setState({
            isToggle: false
        })
    }

    changeStatus = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }




    render() {
        return <>
            {!this.state.isToggle
                ? <span onClick={this.openStatusForm}>{this.props.status || 'New status'}</span>
                : <input autoFocus value={this.state.status} onChange={this.changeStatus} onBlur={this.closeStatusForm} type="text" />}
        </>
    }
}

// let mapStateToProps = (state) => {
//     return {
//         mainId: state.auth.userId,
//         status: state.profile.userStatus
//     }
// }

compose(
    // connect(mapStateToProps, { getStatus }),
    withRouter
)(ProfileStatusClass)

export default ProfileStatusClass

