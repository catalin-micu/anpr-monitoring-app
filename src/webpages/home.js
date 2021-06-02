import React, { useEffect } from 'react';
import { Typography , AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline,
     Grid, Toolbar, Container, Button } from '@material-ui/core';
import EmojiTransportationTwoToneIcon from '@material-ui/icons/EmojiTransportationTwoTone';
import useStyle from './../styles'


const Home = () => {
    useEffect(() => {
        document.title = 'ANPR monitoring app';
    });

    const classes = useStyle();

    return (
        <div>
            <AppBar position="relative">
                <Toolbar>
                    <EmojiTransportationTwoToneIcon className={classes.icon}/>
                    <Typography variant="h6">ANPR administrative app</Typography>
                </Toolbar>
            </AppBar>

            <main>
                <Container maxWidth="md" className={classes.container}>
                    <Typography variant="h2" align="center" color="textPrimary" gutterButton paragraph>
                        ANPR monitoring interface
                    </Typography>
                    <Typography variant="h5" align="center" color="textSecondary">
                        Greetings!
                    </Typography>
                    <Typography variant="h5" align="center" color="textSecondary">
                        This is the administrative user interface
                    </Typography>
                    <Typography variant="h5" align="center" color="textSecondary">
                        for the ANPR access system
                    </Typography>
                    <Typography variant="h5" align="center" color="textSecondary">
                        Please choose which system you would like to monitor
                    </Typography>
                    <div>
                        <Grid container spacing={2} justify="center">
                            <Grid item>
                                <Button variant="contained" color="secondary" size="large" className={classes.button}>
                                    Residential system
                                </Button>
                            </Grid>

                            <Grid item>
                                <Button variant="contained" color="secondary" size="large" className={classes.button}>
                                    Commercial system
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </main>
        </div>
        
    );
};

export default Home;