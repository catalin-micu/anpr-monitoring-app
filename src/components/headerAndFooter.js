import React from 'react';
import { Typography , AppBar, Toolbar, Grid, Link } from '@material-ui/core';
import EmojiTransportationTwoToneIcon from '@material-ui/icons/EmojiTransportationTwoTone';
import useStyle from './../styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';


const Header = () => {
    const classes = useStyle();
    return (
        <AppBar position="relative" style={{background: '#984063'}}>
                <Toolbar>
                    <EmojiTransportationTwoToneIcon className={classes.icon}/>
                    <Typography variant="h6">
                        
                        <Link href="/" color="inherit" underline="none">
                            ANPR administrative app
                        </Link>
                    </Typography>
                </Toolbar>
        </AppBar>
    );
};

const Footer = () => {
    const classes = useStyle();

    return (
        <AppBar className={classes.footer} position="relative" style={{background: '#984063'}}>
            <Toolbar>
                <Grid container spacing={2} justify="center">
                    <Grid item>
                        <Typography variant="body1" className={classes.footerText}>
                            ©2021 - Monitoring App by Catalin Micu
                        </Typography>
                    </Grid>

                    <Grid item>
                        <IconButton onClick={() => window.open('https://www.facebook.com/catalin.micu.acs/')}>
                            <FacebookIcon className={classes.footerFbIcon}/>
                        </IconButton>
                    </Grid>

                    <Grid item>
                        <IconButton onClick={() => window.open('https://github.com/catalin-micu')}>
                            <GitHubIcon className={classes.footerGhIcon}/>
                        </IconButton>
                    </Grid>

                </Grid>
            </Toolbar>
        </AppBar>
    )
};

export { Header, Footer };