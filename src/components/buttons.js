import { useHistory } from 'react-router-dom';
import { Typography , AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline,
    Grid, Toolbar, Container, Button } from '@material-ui/core';
import useStyle from './../styles';


const ResidentialButton = (props) => {
    const classes = useStyle();
    const history = useHistory();

    function handleClick() {
        history.push('/residential'); // no longer neede i think
    }

    return (
        <Button variant="outlined" color="secondary" size="large" className={classes.button} onClick={props.callback}>
            Residential system
        </Button>
    );
};

const CommercialButton = (props) => {
    const classes = useStyle();
    const history = useHistory();

    function handleClick() {
        history.push('/commercial');
    }

    return (
        <Button variant="outlined" color="secondary" size="large" className={classes.button} onClick={props.callback}>
            Commercial system
        </Button>
    );
};

export { ResidentialButton, CommercialButton };