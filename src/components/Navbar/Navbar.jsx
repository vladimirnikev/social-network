import { NavLink } from 'react-router-dom'
import { Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles, Toolbar } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import GroupIcon from '@material-ui/icons/Group';
import ChatIcon from '@material-ui/icons/Chat';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import SettingsIcon from '@material-ui/icons/Settings';

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: 240,
        height: '100vh',
    },
    drawerPaper: {
        width: 240,
        background: '#e8eaf6'
    },
    drawerContainer: {
        overflow: 'auto',
    },
}));


const Navbar = (props) => {

    const classes = useStyles()



    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <Toolbar />
            <div className={classes.drawerContainer}>
                <List>
                    {['profile', 'users', 'messages',
                        // 'news',
                        'music', 'settings'].map((text, key) => {
                            return <ListItem button to={`/${text}`} key={key} component={NavLink} >
                                <ListItemIcon>
                                    {
                                        (text === 'profile' && <PersonIcon />)
                                        || (text === 'users' && <GroupIcon />)
                                        || (text === 'messages' && <ChatIcon />)
                                        || (text === 'music' && <MusicNoteIcon />)
                                        || (text === 'settings' && <SettingsIcon />)
                                    }
                                </ListItemIcon>
                                <ListItemText primary={text[0].toUpperCase() + text.substring(1)} />
                            </ListItem>

                        })}
                </List>
            </div>
        </Drawer >
        // <nav className={s.nav}>
        //     <ul className={s.list}>
        //         <li><NavLink to='/profile' activeClassName={s.activeLink} className={s.link}>Profile</NavLink></li>
        //         <li><NavLink to='/messages' activeClassName={s.activeLink} className={s.link}>Messages</NavLink></li>
        //         <li><NavLink to='/users' activeClassName={s.activeLink} className={s.link}>Users</NavLink></li>
        //         <li><NavLink to='/news' activeClassName={s.activeLink} className={s.link}>News</NavLink></li>
        //         <li><NavLink to='/music' activeClassName={s.activeLink} className={s.link}>Music</NavLink></li>
        //         <li><NavLink to='/settings' activeClassName={s.activeLink} className={s.link}>Settings</NavLink></li>
        //     </ul>
        //     <FriendsList friends={props.friends} />
        // </nav>
    );
}

export default Navbar;