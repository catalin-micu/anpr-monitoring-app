import useStyle from './../styles';
import { Typography , Card, CardContent, CardMedia, Grid } from '@material-ui/core';


const GifCard = (props) => {
    const classes = useStyle();
    return (
        <Grid item className={classes.cardGrid}>
            <Card className={classes.card} variant="outlined">
                <CardMedia className={classes.cardMedia} image={props.gif}/>
                <CardContent className={classes.cardContent}>
                    <Typography variant="h6" align="center" color="textSecondary">{props.cardText}</Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default GifCard;