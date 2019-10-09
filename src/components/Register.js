import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';
import { FormLabel } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import BgImage from './img/login_bg.jpg';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { Link } from "react-router-dom";

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
    marginTop: theme.spacing(10),
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

function getToday(){
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    return date;
}

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            requestorName : '',
            requestDate : getToday(),
            reason : '',
            redirect : false
        };
    }
    handleReasonChange(e){
        e.preventDefault();
        this.setState({reason : e.target.value});
    }
    handleRequestorNameChange(e){
        e.preventDefault();
        this.setState({requestorName : e.target.value});
    }
    handleSubmit(event){
        //AJAX
        event.preventDefault();
        this.setState({redirect : true});
      }
    render(){
        const { classes } = this.props;
        return (
            <div>
            <ThemeProvider theme={Theme}>
                <AppBar color="primary" component={Link} to="/">
                    <Toolbar className={classes.root}>
                    <Typography variant="h6" color="inherit">
                        Register
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
                    id="name"
                    label="Requester Name"
                    name="name"
                    autoFocus
                    value={this.state.requestorName}
                    onChange={this.handleRequestorNameChange.bind(this)}
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="date"
                    label="Request Date"
                    type="text"
                    id="date"
                    value={this.state.requestDate}
                    disabled={true}
                  />
                  <FormLabel>Reason : </FormLabel>
                  <TextareaAutosize
                    variant="outlined"
                    margin="normal"
                    label="Reason"
                    aria-label="reason"
                    type="text"
                    id="reason"
                    fullWidth
                    value={this.state.reason}
                    onChange={this.handleReasonChange.bind(this)}
                    rows={3} 
                  />;
                  <CssBaseline />
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={3}
                    className={classes.main}
                    >
                    <Grid item>
                        <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        >
                            OK
                        </Button>
                    </Grid>
                    <Grid item>
                            <Button
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Cancel
                        </Button>
                    </Grid>
                    </Grid>
                </form>
              </Grid>
            </Grid>
            </div>
            );
        }
}

Register.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(useStyles)(Register);