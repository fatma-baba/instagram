import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import SearchIcon from '@material-ui/icons/Search';
import DashboardIcon from '@material-ui/icons/Dashboard';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import TelegramIcon from '@material-ui/icons/Telegram';
import InsertChartOutlinedTwoToneIcon from '@material-ui/icons/InsertChartOutlinedTwoTone';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import logo from './insta-logo.png';
import profilePic from './profile.jpg';
import './sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar-component">
            <img className="logo" src={logo} alt="" />
            <Avatar alt="Remy Sharp" src={profilePic} className="profile-pic"/>
            <div className="tag">
                <h3>Fatma Mohamed</h3>
                <i>@fatma_mohammed</i>
            </div>
            <div className="stats">
                <div>
                    <span>64</span>
                    <span>Posts</span>
                </div>
                <div>
                    <span>2.6K</span>
                    <span>Follwoers</span>
                </div>
                <div>
                    <span>526</span>
                    <span>Follwoing</span>
                </div>
            </div>
            <List component="nav" aria-label="main mailbox folders" className="menu">
                <ListItem button selected>
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Feed" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <SearchIcon />
                    </ListItemIcon>
                    <ListItemText primary="Explore" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <NotificationsNoneIcon />
                    </ListItemIcon>
                    <ListItemText primary="Notification" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <MailOutlineIcon />
                    </ListItemIcon>
                    <ListItemText primary="Messages" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <TelegramIcon />
                    </ListItemIcon>
                    <ListItemText primary="Direct" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <InsertChartOutlinedTwoToneIcon />
                    </ListItemIcon>
                    <ListItemText primary="Stats" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <SettingsOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Settings" />
                </ListItem>
            </List>
            <Divider />
            <List component="nav" aria-label="main mailbox folders">
                <ListItem button>
                    <ListItemIcon>
                        <ExitToAppOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                </ListItem>
            </List>
        </div>
    )
}

export default Sidebar