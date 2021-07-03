import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'

import { AppBar, Button, IconButton, Toolbar, Menu, MenuItem } from '@material-ui/core';
import { MenuIcon } from '@material-ui/icons'
import { Typography } from '@material-ui/core';
const useStyles = makeStyles({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: "10px",
        color: 'black'
    },
    title: {
        flexGrow: 1,
        color: 'black'
    },
    appBarTransparent: {
        backgroundColor: '#f500577d'
    },
    appBarSolid: {
        backgroundColor: '#fe3f83'
    },
    link:{
        textDecoration:'none',
        color: "white",
    fontSize: "larger",
    fontWeight: "bold"
    },
    registerLink:{
        textDecoration:'none',
        color: "white",
    fontSize: "medium",
    fontWeight: "bold"
    },
    menuItem: {
        backgroundColor: "#ff5588",
        '&:hover': {
            backgroundColor: '#ff3366',
        },
    },
    menu: {
        marginTop: "40px"
    }
});

function NavBar(props) {
    const classes = useStyles();
    const [navBackground, setNavBackground] = useState('appBarTransparent')
    const [anchorEl, setAnchorEl] = React.useState(null);
    const navRef = React.useRef()
    navRef.current = navBackground

    //Event Handler
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 100
            if (show) {
                setNavBackground('appBarSolid')
            } else {
                setNavBackground('appBarTransparent')
            }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    })
    const text = props.text
    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes[navRef.current]}>
                <Toolbar>

                    <Typography variant="h6" className={classes.title} >

                    </Typography>
                    <Button color="black">
                        <Link className={classes.link} to="/">Home</Link>
                    </Button>
                    <Button color="black">
                        <Link className={classes.link} to="/news">News</Link>
                    </Button>
                    <Button color="black">
                        <Link className={classes.link} to="/workshops">Workshops</Link>
                    </Button>
                    <Button color="black">
                        <Link className={classes.link} to="/contactUs">Contact Us</Link>
                    </Button>
                    <Button color="black">
                        <Link className={classes.link} to="/papers">Research</Link>
                    </Button>
                    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className={classes.registerLink}>
                        Register
                    </Button>
                    <div className={classes.menu}>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            className={classes.menu}
                        >
                            <MenuItem onClick={handleClose} className={classes.menuItem}>
                                <Link className={classes.registerLink} to="/researcher/register">Register as Researcher</Link>
                            </MenuItem>
                            <MenuItem onClick={handleClose} className={classes.menuItem}>
                                <Link className={classes.registerLink} to="/workshop/register">Register to conduct workshop</Link>
                            </MenuItem>
                            <MenuItem onClick={handleClose} className={classes.menuItem}>
                                <Link className={classes.registerLink} to="/attendee/register">Register as Attendee</Link>
                            </MenuItem>
                        </Menu>        
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}


export default NavBar;