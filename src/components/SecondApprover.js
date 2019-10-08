import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import { createMuiTheme } from '@material-ui/core/styles';
import BgImage from './img/login_bg.jpg';

const Theme = createMuiTheme({
    palette: {
      primary: {
        main: '#1a237e'
      }
    }
  });

const useStyles = theme => ({
  root: {
    margin: '0 auto',
  },
  main: {
    backgroundImage: `url(${BgImage})`,
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class SecondApprover extends Component {
    constructor(props) {
        super(props);
    }
    render(){
    return (
        <div>
            <p>2nd</p>
        </div>
        );
    }
}

SecondApprover.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(useStyles)(SecondApprover);