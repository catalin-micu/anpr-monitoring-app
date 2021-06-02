import { makeStyles } from '@material-ui/core/styles';


const useStyle = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6)
    },
    icon: {
        marginRight: theme.spacing(2),
        fontSize: 75
    },
    button: {
        marginTop: theme.spacing(4), 
        //marginLeft: theme.spacing(10)
    }
}));

export default useStyle;