import React from 'react'
import { NavLink } from 'react-router-dom';
import Logo from './../../assets/img/logos.svg'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


import RightHeaderMenu from './RightHeaderMenu';

const useStyles = makeStyles((theme) => ({
    root: {
        zIndex: theme.zIndex.drawer + 1,
        gridArea: 'h'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        marginLeft: theme.spacing(2)
    },
    loginWrapper: {
        display: 'flex',
        alignItems: 'center'
    },
    userLogin: {
        marginRight: theme.spacing(2)
    }
}));


const Header = ({ isLogin, login, logout }) => {
    const classes = useStyles();

    return (
        <AppBar position="fixed" className={classes.root} >
            <Toolbar>
                <img alt='logo' src={Logo} />
                <Typography variant="h6" className={classes.title}>
                    Social Network
                    </Typography>
                <div>
                    {isLogin
                        ? <RightHeaderMenu logout={logout} login={login} />
                        : <Button className={classes.loginButton} to='/login' component={NavLink} color="inherit">Login</Button>
                    }
                </div>
            </Toolbar>
        </AppBar>
        // </header>

        //  {/* <header className={s.header} > */}

        //     {/* <img src='https://vsetreningi.ru/avatars/objects/8-1539_1_6.jpg?7a3135fcd5210906b1ab7814f42fa4b7' alt='logo' />

        // <div>
        //     {isLogin
        //         ? <div>{login} <button onClick={logout}>Logout</button></div>
        //         : <NavLink to='/login'>Login</NavLink>}

        // </div> */}
        // </header>

    );
}

export default Header;