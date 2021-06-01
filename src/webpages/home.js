import React, { useEffect } from 'react';
import { Typography , AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import EmojiTransportationTwoToneIcon from '@material-ui/icons/EmojiTransportationTwoTone';


const Home = () => {
    useEffect(() => {
        document.title = 'ANPR monitoring app';
    });

    return (
        <div>
            <Typography variant="h1">ANPR monitoring app</Typography>
            <Typography variant="h3">This is the home page</Typography>
        </div>
    );
};

export default Home;