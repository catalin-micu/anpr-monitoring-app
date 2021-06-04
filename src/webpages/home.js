import React, { useEffect } from 'react';
import { Typography , AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline,
     Grid, Toolbar, Container, Button } from '@material-ui/core';
import useStyle from './../styles';
import { CommercialButton, ResidentialButton } from './../components/buttons';
import { Footer, Header } from './../components/headerAndFooter';


const Home = () => {
    useEffect(() => {
        document.title = 'ANPR monitoring app';
    });

    const classes = useStyle();

    // todo: gray backgorund
    return (
        <div>
            <Header/>

            <main>
                <Container maxWidth="md" className={classes.container}>
                    <Typography variant="h2" align="center" color="textPrimary" paragraph>
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
                               <ResidentialButton/>
                            </Grid>

                            <Grid item>
                                <CommercialButton/>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </main>
            <Footer/>
        </div>
        
    );
};

export default Home;