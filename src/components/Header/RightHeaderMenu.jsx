import React, { useState } from 'react'
import { IconButton, makeStyles, Menu, MenuItem, Typography } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
    userLogin: {
        marginRight: theme.spacing(2)
    },
    loginWrapper: {
        display: 'flex',
        alignItems: 'center'
    }
}));

const RightHeaderMenu = ({ logout, login }) => {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);


    return <div className={classes.loginWrapper}>
        <Typography className={classes.userLogin} variant="subtitle1">
            {login}
        </Typography>
        <IconButton
            // aria-label="account of current user"
            // aria-controls="menu-appbar"
            // aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
        >
            <AccountCircle />
        </IconButton>
        <Menu
            // id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={open}
            onClose={handleClose}
        >
            {/* <MenuItem onClick={handleClose}>Profile</MenuItem> */}
            <MenuItem onClick={() => {
                handleClose()
                logout()
            }}>
                Logout
            </MenuItem>
        </Menu>
    </div>
}

export default RightHeaderMenu