import React, { useState } from 'react'
import Cookies from 'universal-cookie';
import {AppBar, Badge, InputBase, makeStyles, Toolbar, Typography,Button, IconButton } from '@material-ui/core'
import {Cancel, LocalMall, Mail,  Person, Search} from '@material-ui/icons'
import EventIcon from '@material-ui/icons/Event';
import { alpha } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    toolbar: {
        display: "flex",
        justifyContent: "space-between"
    }
    ,logoLg: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block",
        },
    },
    logoSm: {
        display: "block",
        [theme.breakpoints.up("sm")]: {
            display: "none",
        },
    },
    search: {
        display: "flex",
        alignItems: "center",
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        borderRadius: theme.shape.borderRadius,
        width: "50%",
        [theme.breakpoints.down("xs")]: {
            display: (props) => (props.open ? "flex" : "none"),
            width: "70%",
        },
    },
    input: {
        color: "white",
        marginLeft: theme.spacing(1),
    },
    cancel: {
        display: (props) => (props.open ? "flex" : "none"),
    },
    icons: {
        alignItems: "center",
        display: (props) => (props.open ? "none" : "flex"),
    },
    badge: {
        marginRight: theme.spacing(2),
    },
    searchButton: {
        marginRight: theme.spacing(2),
        display: "flex",
        [theme.breakpoints.up("sm")]: {
            display: "none",
        },
    },
    button: {
        alignItems: "center",
        marginRight: theme.spacing(2),
        '&:hover': {
            color:"black",
            backgroundColor: alpha(theme.palette.common.white, 0.05),
        },
        color: theme.palette.common.white,
        borderColor:theme.palette.common.white,
    },
    

}))

function Navbar() {
    const cookies = new Cookies();
    const [open, setOpen] = useState(false)
    const classes = useStyles({ open });

    if (cookies.get('jwt') === undefined) {         //change condition after auth
        return (
            <AppBar position="fixed">
                <Toolbar className={classes.toolbar} >
                    <Typography variant="h6" className={classes.logoLg}>
                        HackX
                    </Typography>
                    <Typography variant="h6" className={classes.logoSm}>
                        
                    </Typography>
                    
                    <div className={classes.search} >
                        <Search />
                        <InputBase placeholder="Search..." className={classes.input} />
                        <Cancel className={classes.cancel} onClick={() => setOpen(false)} />
                    </div>
    
                    <div className={classes.icons} >
                        <Search className={classes.searchButton} onClick={() => setOpen(true)}/>
                        <Badge badgeContent={4} color="secondary" className={classes.badge}>
                            <Mail />
                        </Badge>
                        <Badge badgeContent={2} color="secondary" className={classes.badge}>
                            <EventIcon />
                        </Badge>
                        {/* <Badge color="secondary" className={classes.badge}>
                            <Person />
                        </Badge> */}
                        <IconButton color="inherit">
                            <Person />
                        </IconButton>
                    </div>
                  
                </Toolbar>
            </AppBar>
        )
    }
    else{
        return (
            <AppBar position="fixed">
                <Toolbar className={classes.toolbar} >
                    <Typography variant="h6" className={classes.logoLg}>
                        Mini Mall
                    </Typography>
                    <Typography variant="h6" className={classes.logoSm}>
                        MALL
                    </Typography>
                    
                    <div className={classes.search} >
                        <Search />
                        <InputBase placeholder="Search..." className={classes.input} />
                        <Cancel className={classes.cancel} onClick={() => setOpen(false)} />
                    </div>
    
                    <div className={classes.icons} >
                    <Search className={classes.searchButton} onClick={() => setOpen(true)}/>
                    <Button href="/signup" variant="outlined"  className={classes.button}>SIGN UP</Button>
                    <Button href="/signin"  variant="outlined"  className={classes.button}>SIGN IN</Button>
                    
                    </div>
                  
                </Toolbar>
            </AppBar>
        )

    }

    
}

export default Navbar
