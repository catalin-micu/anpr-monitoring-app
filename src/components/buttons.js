import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
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

const IndivApplyButton = (props) => {
    const classes = useStyle();

    return (
        <Button variant="outlined" color="secondary" size="small" className={classes.applyButton} onClick={props.callback}>
            Apply parameters
        </Button>
    );
};

const LotApplyButton = (props) => {
    const classes = useStyle();

    return (
        <Button variant="outlined" color="secondary" size="small" className={classes.applyButton} onClick={props.callback}>
            Apply date parameter
        </Button>
    );
};

const CommercialApplyButton = (props) => {
    const classes = useStyle();

    return (
        <Button variant="outlined" color="secondary" size="small" className={classes.applyButton} onClick={props.callback}>
            Apply date parameter
        </Button>
    );
};

export { ResidentialButton, CommercialButton, IndivApplyButton, LotApplyButton, CommercialApplyButton };