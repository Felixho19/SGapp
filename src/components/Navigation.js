import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const useStyles = theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    position: 'relative',
    marginRight: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginRight: theme.spacing(1),
      width: 'auto',
    }
  },
  login: {
    position: 'relative',
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    }
    }
});

class Navigation extends Component {
  render(){
    const { auth, classes } = this.props;
    return (
        <div className={classes.root}>
        <AppBar position="static" color="default">
            <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.title}>
                Good Morning
            </Typography>
            {!auth && (<Typography variant="h6" color="inherit" className={classes.login}>
                Login or Register
            </Typography>)}
            </Toolbar>
        </AppBar>
        </div>
        );
    }
}

Navigation.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(useStyles)(Navigation);