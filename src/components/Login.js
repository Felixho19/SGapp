import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import BgImage from './img/login_bg.jpg';
import { Redirect } from 'react-router-dom';

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
  formControl: {
    margin: theme.spacing(3),
  },
});

const URLs = {
  "customer" : "register",
  "firstApprover" : "firstApprover",
  "secondApprover" : "secondApprover"
};
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled : true,
            userType : '',
            username : '',
            password : '',
            redirect : false
        };
    }
    handleSubmit(event){
      event.preventDefault();
      this.setState({redirect : true});
    }
    handleUsernameChange(event){
      event.preventDefault();
      this.setState({username : event.target.value});
    }
    handlePasswordChange(event){
      event.preventDefault();
      this.setState({password : event.target.value});
    }
    handleChange(event){
      if(event.target.value == "firstApprover" || event.target.value == "secondApprover"){
        this.setState({ disabled : false , userType : event.target.value });
      }else{
        this.setState({ disabled : true , userType : event.target.value });
      }
      console.log(event.target.value);
    };
    render(){
    const { classes } = this.props;
    return (
        <div>
        {this.state.redirect?<Redirect to={'/'+URLs[this.state.userType]} />:null}
        <ThemeProvider theme={Theme}>
        <AppBar color="primary">
            <Toolbar className={classes.root}>
            <Typography variant="h6" color="inherit">
                Login
            </Typography>
            </Toolbar>
        </AppBar>
        </ThemeProvider>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={10}
          className={classes.main}
        >
          <CssBaseline />
          <Grid item className={classes.paper}>
            <form className={classes.form} onSubmit={this.handleSubmit.bind(this)} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="text"
                label="Username"
                name="text"
                autoFocus
                value={this.state.username}
                onChange={this.handleUsernameChange.bind(this)}
                disabled={this.state.disabled? "disable" : ""}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={this.state.password}
                onChange={this.handlePasswordChange.bind(this)}
                disabled={this.state.disabled? "disable" : ""}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Log In
              </Button>
            </form>
            <CssBaseline />
          </Grid>
          <Grid item className={classes.paper}>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">You are: {this.state.userType}</FormLabel>
            <RadioGroup aria-label="identity" name="identity" defaultValue="customer" value={this.state.type} onClick={this.handleChange.bind(this)}>
              <FormControlLabel
                value="customer"
                control={<Radio color="primary" />}
                label="Customer"
                labelPlacement="start"
              />
              <FormControlLabel
                value="firstApprover"
                control={<Radio color="primary" />}
                label={<p>1<sup>st</sup> Approver</p>}
                labelPlacement="start"
              />
              <FormControlLabel
                value="secondApprover"
                control={<Radio color="primary" />}
                label={<p>2<sup>nd</sup> Approver</p>}
                labelPlacement="start"
              />
            </RadioGroup>
          </FormControl>
          </Grid>
        </Grid>
        </div>
        );
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(useStyles)(Login);