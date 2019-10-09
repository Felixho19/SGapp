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
  comment: {
    marginTop: theme.spacing(10),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});
const FIRST_APPROVE_URL = "";
const GET_NEW_CUSTOMER_URL = ""
const REJECT_URL = "";

class FirstApprover extends Component {
    constructor(props) {
        super(props);
        this.state = {
            requestorName : '',
            requestDate : '',
            reason : '',
            firstComment: '',
        };
    }
    loadRequestor(){
        let data = {
            requestorName : "Felix",
            requestDate : "2019-10-9",
            reason: "work",
            firstComment: '',
        }
        this.setState(data);
    }
    handleFirstCommentChange(e){
        e.preventDefault();
        this.setState({firstComment : e.target.value});
    }
    handleSubmit(event){
        //AJAX
        event.preventDefault();
        let state = this.state;
        fetch(FIRST_APPROVE_URL,{
            method: `POST`,
            body: {
                state
            }
        }).then(
          //200
          (res)=>{
            if(res.ok) {
                //Call next record
                this.loadRequestor();
            }
          },
          //500
          (error)=>{
             console.log(error);
          }
        );
      }
    render(){
        const { classes } = this.props;
        return (
            <div>
                <ThemeProvider theme={Theme}>
                    <AppBar color="primary" component={Link} to="/">
                        <Toolbar className={classes.root}>
                        <Typography variant="h6" color="inherit">
                            First Approver : username
                        </Typography>
                        </Toolbar>
                    </AppBar>
                </ThemeProvider>
                <form className={classes.form} onSubmit={this.handleSubmit.bind(this)} noValidate>
                    <Grid container direction="column" justify="center" alignItems="center" spacing={5}>
                        <Grid container direction="row" justify="center" alignItems="center" spacing={10} className={classes.main}>
                            <Grid item className={classes.paper}>
                                <TextField variant="outlined" margin="normal" required fullWidth id="name" label="Requester Name" name="name" autoFocus value={this.state.requestorName} disabled={true}/>
                                <TextField variant="outlined" margin="normal" required fullWidth name="date" label="Request Date" type="text" id="date" value={this.state.requestDate} disabled={true}/>
                                <FormLabel>Reason : </FormLabel>
                                <TextareaAutosize variant="outlined" margin="normal" label="Reason" aria-label="reason" type="text" id="reason" fullWidth value={this.state.reason} rows={3}  disabled={true}/>
                                <CssBaseline />
                            </Grid>
                            <Grid item className={classes.comment}>
                                <FormLabel>1<sup>st</sup> Approver's comment : </FormLabel>
                                <Grid container direction="column"> 
                                    <TextareaAutosize variant="outlined" aria-label="reason" type="text" id="firstcomment" fullWidth value={this.state.firstComment} onChange={this.handleFirstCommentChange.bind(this)} rows={6} />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container direction="row" justify="center" alignItems="center" spacing={5}>
                            <Grid item>
                                <Button onClick={this.loadRequestor.bind(this)} variant="contained" color="primary" className={classes.submit}>Get Next</Button>
                            </Grid>
                            <Grid item>
                                <Button variant="contained" color="primary" className={classes.submit}>Approve</Button>
                            </Grid>
                            <Grid item>
                                <Button variant="contained" color="primary" className={classes.submit}>Reject</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </form>
            </div>
            );
        }
}

FirstApprover.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(useStyles)(FirstApprover);