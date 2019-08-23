import React from 'react';
import {Link} from 'react-router-dom';
import { withStyles, Button, Grid, Paper, 
  Table, TableBody, TableRow, TableCell, GridListTileBar, 
  GridListTile, GridList, Typography, Modal, Backdrop, Fade} from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import foods from './Data';
import PropTypes from 'prop-types';

const Theme = createMuiTheme({
    palette: {
      primary: {
        main: '#1a237e'
      },
      secondary: {
        main: '#ECEFF1'
      },
      textSecondary: {
        main: '#ECEFF1'
      }
    }
});
const useStyles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(0, 3),
  },
  modal: {
    display: 'flex',
    direction: "column",
    justify: "center",
    alignItems: "flex-end",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2),
  },
  paperButton:{
    padding: theme.spacing(1)
  },
  button: {
    width: "100%",
    margin: theme.spacing(1),
  },
});

class TableReservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          open: false
        };
    }
    handleOpen = () => {
      this.setState({open:true});
    };
  
    handleClose = () => {
      this.setState({open:false});
    };
    render() {
      const { classes } = this.props;
      return(
        <Grid container>
            <Button onClick={this.handleOpen.bind(this)} variant="contained" color="primary" className={classes.button}>
                Book Table
            </Button>
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={this.state.open}
            onClose={this.handleClose.bind(this)}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
            >
            <Fade in={this.state.open}>
                <div className={classes.paper}>
                <div id="transition-modal-title">
                <Grid container className={classes.root} spacing={2}>
                    <Grid item xs={12}>
                    <Typography>Date</Typography>
                    </Grid>
                    <Grid item xs={12}>
                    <Grid container justify="center" spacing={1}>
                        {[19, 20, 21].map(value => (
                        <Grid key={value} item xs={4}>
                            <Paper className={classes.paperButton}>
                            <Typography gutterBottom variant="p">
                            {"Aug "+value}
                            </Typography>
                            </Paper>
                        </Grid>
                        ))}
                    </Grid>
                    </Grid>
                    <Grid item xs={12}>
                    <Typography>Seats</Typography>
                    </Grid>
                    <Grid item xs={12}>
                    <Grid container justify="center" spacing={1}>
                        {[...Array(6).keys()].map(v=>++v).map(value => (
                        <Grid key={value} item xs={2}>
                            <Paper className={classes.paperButton}>
                            <Typography gutterBottom variant="p">
                            {value}
                            </Typography>
                            </Paper>
                        </Grid>
                        ))}
                    </Grid>
                    </Grid>
                    <Grid item xs={12}>
                    <Typography>Time</Typography>
                    </Grid>
                    <Grid item xs={12}>
                    <Grid container justify="center" spacing={1}>
                        {["Specific Time", "Breakfast", "Lunch"].map(value => (
                        <Grid key={value} item xs={4}>
                            <Paper className={classes.paperButton}>
                            <Typography gutterBottom variant="p">
                            {value}
                            </Typography>
                            </Paper>
                        </Grid>
                        ))}
                    </Grid>
                    </Grid>
                    <Button component={Link} to="/" variant="contained" color="default" className={classes.button}>
                        Okay
                    </Button>
                </Grid>
                </div>
                </div>
            </Fade>
            </Modal>
        </Grid>
      );
    }
  }

TableReservation.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(useStyles)(TableReservation);