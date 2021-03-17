import { connect } from "react-redux";
import Navbar from './Navbar'

let mapStateToProps = (state) => {
    return {
        friends: state.sidebar.friends
    }
}

const NavbarContainer = connect(mapStateToProps, null)(Navbar);

export default NavbarContainer