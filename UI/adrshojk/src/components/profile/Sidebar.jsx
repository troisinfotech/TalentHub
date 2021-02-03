import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import TableChartIcon from '@material-ui/icons/TableChart';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Survey from './Survey';
import Profile from './Profile';
import { useDispatch,connect } from 'react-redux';
import { logoutAction } from '../../redux/actions/userActions';
import { useHistory } from 'react-router-dom';
import TableView from './TableView';
import { Avatar } from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },

    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    avatar:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        marginLeft: 'auto',
        float:'left'
    }
}));

function Sidebar(props) {
    const dispatch = useDispatch()
    const history = useHistory()
    const { window ,userInfo} = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);


    const [selectedTab, setTab] = useState('survey')

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const logout = () => {
        dispatch(logoutAction());
        history.push('/')
    }

    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <List>
                <Divider />
                <ListItem button key='Home' onClick={() => setTab('home')} >
                    <ListItemIcon><HomeIcon /></ListItemIcon>
                    <ListItemText primary='Home' />
                </ListItem>
                <Divider />
                <ListItem button key={'Survey'} onClick={() => setTab('survey')} >
                    <ListItemIcon><AssignmentIcon /></ListItemIcon>
                    <ListItemText primary='Survey' />
                </ListItem>
                <Divider />
                <ListItem button key={'Table'} onClick={() => setTab('table')} >
                    <ListItemIcon><TableChartIcon /></ListItemIcon>
                    <ListItemText primary='Table' />
                </ListItem>
                <ListItem button key='logout' onClick={() => logout()}>

                    <ListItemIcon><ExitToAppIcon /></ListItemIcon>
                    <ListItemText primary='Logout' />
                </ListItem>

                <Divider />

            </List>

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;



    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Trois Challenge
          </Typography>
            <div className={classes.avatar}>
                    <Typography variant="h7" noWrap>
{userInfo.userInfo.nickname}
          </Typography>

                <Avatar src={userInfo.userInfo.picture} />
            </div>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="sidebar tabs">
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true,
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <div className={classes.mainSection}>
                    {selectedTab === 'home' && <Profile />}
                    {selectedTab === 'survey' && <Survey />}
                    {selectedTab === 'table' && <TableView />}
                </div>
            </main>
        </div>
    );
}

Sidebar.propTypes = {

    window: PropTypes.func,
};
const mapToProps =(state)=>{
return{
    userInfo:state.userInfo
}
}
export default connect(mapToProps)(Sidebar);
