import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyle = makeStyles((theme) => ({
    main: {
        backgroundColor: '#DCDCDC',
        
    },
    container: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 8),
        borderRadius: '55px',
        marginTop: '9px'
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
        position: 'fixed',
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
    },
    cardGrid: {
        padding: '20px 0',
        marginTop: '20px'
    },
    card: {
        height: '100%',
        borderRadius: '25px'
        //display: 'flex',
        //flexDirection: 'column'
    },
    cardMedia: {
        paddingTop: '100%'
    },
    cardContent: {
        position: 'relative',
        bottom: 0
    },
    drawer: {
        width: drawerWidth
    },
    residentialRoot: {
        display: 'flex'
    }
}));

export default useStyle;