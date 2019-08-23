import React, { Component } from 'react';
import { withStyles, AppBar, Toolbar, Typography } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Theme = createMuiTheme({
    palette: {
      primary: {
        main: '#1a237e'
      }
    }
  });

const useStyles = theme => ({
  root: {
    flexGrow: 1,
    color: '#1a237e'
  },
  title: {
    flexGrow: 1,
    fontFamily: 'arial',
    position: 'relative',
    marginRight: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginRight: theme.spacing(1),
      width: 'auto',
    }
  },
  login: {
    fontFamily: 'arial',
    textAlign: 'right',
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
        <ThemeProvider theme={Theme}>
            <div className={classes.root}>
            <AppBar position="static" color="primary">
                <Toolbar>
                <Typography variant="h6" color="inherit" className={classes.title}>
                    Good Morning
                </Typography>
                {!auth && (<Typography component={Link} to="/login" variant="h6" color="inherit" className={classes.login}>
                    Login or Register
                </Typography>)}
                </Toolbar>
            </AppBar>
            </div>
        </ThemeProvider>
        );
    }
}

Navigation.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(useStyles)(Navigation);