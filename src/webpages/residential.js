import React from 'react';
import { useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import EmojiTransportationTwoToneIcon from '@material-ui/icons/EmojiTransportationTwoTone';
import { Container, Grid, Link } from '@material-ui/core';
import { Footer } from './../components/headerAndFooter';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import TextField from '@material-ui/core/TextField';
import DateRangeOutlinedIcon from '@material-ui/icons/DateRangeOutlined';
import IndividualPie from '../components/individualPie';
import ZoomChart from '../components/individualChart';
import SevenBarChart from '../components/sevenBarChart';

const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
    height: '75px',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin'
    , {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }
    ),
    marginLeft: -drawerWidth,
    backgroundColor: '#DCDCDC',
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
    backgroundColor: '#DCDCDC',
  },
  headerIcon: {
    marginRight: theme.spacing(2),
    fontSize: 75
  },
  closeDrawerIcon: {
    color: 'white'
  },
  sideOptionHeader: {
      marginTop: '15px',
      marginLeft: '15px'
  },
  titleContainer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1, 0, 0.05),
    borderRadius: '55px',
    marginBottom: '9px'
  },
  chart: {
      height: '250px',
       width: '98%'
  },
  chartShift : {
    height: '250px',
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  pie: {
    height: '250px',
   width: '500px'
  },
  pieShift: {
    height: '250px',
    width: '500px',
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  barChart: {
    height: '250px',
    width: '700px'
  },
  barChartShift: {
    height: '250px',
    width: '700px',
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }
}));

export default function Residential() {
    useEffect( () => {
        document.title = 'ANPR residential monitoring app'
    });
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        color="secondary"
      >
        <Toolbar>
          <IconButton color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>

          <EmojiTransportationTwoToneIcon className={classes.headerIcon}/>

          <Typography variant="h6">              
            <Link href="/" color="inherit" underline="none">
                ANPR administrative app
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <AppBar className={classes.drawerHeader} color="secondary" position="relative">
            <Typography variant="h6">Graph parameters</Typography>
          <IconButton onClick={handleDrawerClose} className={classes.closeDrawerIcon}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </AppBar>

        <Typography variant="button" className={classes.sideOptionHeader} color="textSecondary">Individual chart</Typography>
        <Divider />

        <List>
          <ListItem key="indivReg">
            <ListItemIcon> <DriveEtaIcon/> </ListItemIcon>
            <ListItemText primary="Registration number"/>
          </ListItem>
          <ListItem key="indivRegText">
            <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Number plate"
            autoFocus
            size="small"
            // onChange={event => setCode(event.target.value)}
          />
          </ListItem>

          <ListItem key="indivDate">
            <ListItemIcon> <DateRangeOutlinedIcon/> </ListItemIcon>
            <ListItemText primary="Time interval"/>
          </ListItem>
          <ListItem key="indivRegText">
            <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Start date(dd-mm-yyy)"
            autoFocus
            size="small"
            // onChange={event => setCode(event.target.value)}
          />
          </ListItem>
        </List>

        <Typography variant="button" className={classes.sideOptionHeader} color="textSecondary">Parking lot chart</Typography>
        <Divider />

        <List>
        <ListItem key="indivDate">
            <ListItemIcon> <DateRangeOutlinedIcon/> </ListItemIcon>
            <ListItemText primary="Time interval"/>
          </ListItem>
          <ListItem key="indivRegText">
            <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Start date(dd-mm-yyy)"
            autoFocus
            size="small"
            // onChange={event => setCode(event.target.value)}
          />
          </ListItem>
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />

        <Container maxWidth="md" className={classes.titleContainer}>
            <Typography variant="h2" align="center" color="textPrimary" >
                Residential system
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary">
                Dynamically monitor the activity of your access system
            </Typography>
        </Container>
        
        <Container maxWidth="sm" className={classes.titleContainer}>
          <Typography variant="body1" align="center" color="textSecondary">
            Expand the left side menu and insert the required parameters
          </Typography>
        </Container>
        <Divider/>
       
       <Grid container style={{marginTop: '3px'}} direction="column" >
          <div className={clsx(classes.chart, {
            [classes.chartShift]: open,
          })}>
            <ZoomChart />
          </div>
          <Container maxWidth="sm" className={classes.titleContainer} style={{marginTop: '20px'}}>
            <Typography variant="body1" align="center" color="textSecondary">
              Monitored activity of number plate XXXXXXX
            </Typography>
          </Container>
        </Grid>

        <Grid container justify="center" spacing={6}>
          <Grid item style={{marginTop: '3px'}} direction="column" alignContent="flex-start" >
            <div className={clsx(classes.pie, {
              [classes.pieShift]: open,
            })}>
              <IndividualPie />
            </div>
            <Container maxWidth="xs" className={classes.titleContainer} style={{marginTop: '20px'}}>
              <Typography variant="body1" align="center" color="textSecondary">
                Activity summary of number plate XXXXXXX
              </Typography>
            </Container>
          </Grid>
          
          <Grid item style={{marginTop: '3px'}} direction="column" alignContent="flex-start" >
            <div className={clsx(classes.barChart, {
              [classes.barChartShift]: open,
            })}>
              <SevenBarChart />
            </div>
            <Container maxWidth="xs" className={classes.titleContainer} style={{marginTop: '20px'}}>
              <Typography variant="body1" align="center" color="textSecondary">
                Activity summary of entire parking lot
              </Typography>
            </Container>
          </Grid>
        </Grid>
        
      </main>
      
      <Footer/>
      
    </div>
    
  );
};
