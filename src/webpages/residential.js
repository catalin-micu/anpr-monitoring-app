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
import { Container, Link } from '@material-ui/core';
import { Footer } from './../components/headerAndFooter';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import TextField from '@material-ui/core/TextField';
import DateRangeOutlinedIcon from '@material-ui/icons/DateRangeOutlined';
import Example from '../components/chartExample';

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
    //  height: '100%'
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
    backgroundColor: '#DCDCDC',
    // height: '100%'
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
      height: '500px',
      width: '500px'
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
            <Typography variant="h2" align="center" color="textPrimary" paragraph>
                Residential system
            </Typography>
            
        </Container>
        
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
          facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
          tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
          consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
          vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
          hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
          tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
          nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
          accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
        
        <div className={classes.chart}><Example  /></div>
      </main>
      
      <Footer/>
      
    </div>
    
  );
};
