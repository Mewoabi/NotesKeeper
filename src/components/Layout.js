import React from 'react'
import { AppBar, Drawer, List, ListItem, ListItemText, Toolbar, Typography, makeStyles } from '@material-ui/core'
import { AddCircleOutlineOutlined, SubjectOutlined } from '@mui/icons-material'
import { ListItemIcon } from '@mui/material'
import { useHistory, useLocation } from 'react-router-dom'
import {format} from 'date-fns'
import Avatar from '@material-ui/core/Avatar'


const drawerWidth = 240
const useStyles = makeStyles((theme) => {
    return {
        page: {
            backgroundColor: '#f9f9f9',
            width: '100%'
        },
        drawer: {
            width: drawerWidth
        },
        drawerPaper: {
            width: drawerWidth
        },
        root: {
            display: 'flex'
        },
        active: {
            backgroundColor: '#e2e2e2'
        }, 
        appbar : {
            width: `calc(100% - ${drawerWidth}px)`
        },
        toolbar: theme.mixins.toolbar,
        drawerHeader: {
            padding: 20
        },
        date: {
            flexGrow: 1
        },
        avatar: {
            marginLeft: 10
        }
    }
})
const menuItems = [
    {
        text: 'My notes',
        icon: <SubjectOutlined color='primary' />,
        path: '/'
    },
    {
        text: 'Create Note',
        icon: <AddCircleOutlineOutlined color='primary' />,
        path: '/create'
    }
]

const Layout = ({ children }) => {
    const history = useHistory()
    const location = useLocation()
    const classes = useStyles()
    return (
        <div className={classes.root}>

           <AppBar className={classes.appbar} elevation={0}>
                <Toolbar>
                    <Typography className={classes.date}>
                         Today is the {format(new Date(), 'do MMMM Y')}
                    </Typography>
                    <Typography>
                         Doray
                    </Typography>
                    <Avatar src='/midorya.png' className={classes.avatar}/>
                </Toolbar>
           </AppBar>

            <Drawer
                className={classes.drawer}
                variant="permanent"
                anchor="left"
                classes={{ paper: classes.drawerPaper }}
            >
                <Typography variant='h5' className={classes.drawerHeader}>Notes Drawer</Typography>
                <List>
                    {
                        menuItems.map(item => (
                            <ListItem
                                key={item.text} button
                                onClick={() => { history.push(item.path) }}
                                className={location.pathname === item.path ? classes.active : null}
                            >
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItem>
                        ))
                    }
                </List>
            </Drawer>

            <div className={classes.page}>
                <div className={classes.toolbar}></div>
                {children}
            </div>
        </div>
    )
}

export default Layout