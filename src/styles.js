import { makeStyles } from '@material-ui/core/styles';


const useStyle = makeStyles((theme) => ({
    main: {
        backgroundColor: 'gray'
    },
    container: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
        borderRadius: '55px'
    },
    icon: {
        marginRight: theme.spacing(2),
        fontSize: 75
    },
    button: {
        marginTop: theme.spacing(4), 
        //marginLeft: theme.spacing(10)
    },
    footer: {
        position: 'absolute',
        bottom: 0
    },
    footerFbIcon: {
        fontSize: 35,
        color: 'white'
    },
    footerGhIcon: {
        fontSize: 30,
        color: 'white',
        marginTop: '2px'
    },
    footerText: {
        color: "white",
        marginTop: '18px'
    }
}));

export default useStyle;