import { useHistory } from 'react-router-dom';
import { Typography , AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline,
    Grid, Toolbar, Container, Button } from '@material-ui/core';
import useStyle from './../styles';


const ResidentialButton = () => {
    const classes = useStyle();
    const history = useHistory();

    function handleClick() {
        history.push('/residential');
    }

    return (
        <Button variant="outlined" color="secondary" size="large" className={classes.button} onClick={handleClick}>
            Residential system
        </Button>
    );
};

const CommercialButton = () => {
    const classes = useStyle();
    const history = useHistory();

    function handleClick() {
        history.push('/commercial');
    }

    return (
        <Button variant="outlined" color="secondary" size="large" className={classes.button} onClick={handleClick}>
            Commercial system
        </Button>
    );
};

export { ResidentialButton, CommercialButton };