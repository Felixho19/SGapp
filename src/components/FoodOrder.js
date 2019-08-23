import React from 'react';
import {Link} from 'react-router-dom';
import { withStyles, Button, Grid, Paper, 
  Table, TableBody, TableRow, TableCell, GridListTileBar, 
  GridListTile, GridList, Typography, Modal, Backdrop, Fade} from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';
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
    padding: theme.spacing(0),
  },
  modal: {
    display: 'flex',
    direction: "column",
    justify: "center",
    alignItems: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
    width: '90%',
  },
  paperButton:{
    padding: theme.spacing(1)
  },
  button: {
    width: "100%",
    margin: theme.spacing(1),
  },
  confirmTitle : {
    lineHeight : 1.5,
    marginBottom: theme.spacing(1)
  }
});

const GreenRadio = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})(props => <Radio color="default" {...props} />);

class TableReservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          open: false,
          selectedValue: 0,
        };
    }
    handleOpen = () => {
      this.setState({open:true});
    };
  
    handleClose = () => {
      this.setState({open:false});
    };

    handleChange = (e) => {
      console.log(e.target.value);
      this.setState({selectedValue: e.target.value});
    };
    render() {
      const { classes, id } = this.props;
      return(
        <Grid>
            <Button onClick={this.handleOpen.bind(this)} variant="contained" color="primary" className={classes.button}>
                Order
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
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
            <Fade in={this.state.open}>
                <div className={classes.paper}>
                <div id="transition-modal-title">
                  <Typography variant="h5" component="h3" className={classes.confirmTitle}>Select One Choice:</Typography>
                </div>
                <div id="transition-modal-description">
                
                <Grid container className={classes.root} spacing={2}>
                    {foods[id].options.map((option, index) => (
                    <Grid item xs={6}>
                      <Grid container>
                        <Grid item>
                          <GreenRadio
                            checked={this.state.selectedValue == index}
                            onChange={this.handleChange.bind(this)}
                            value={index}
                            name="radio-button-demo"
                          />
                        </Grid>
                        <Grid item>
                          <Typography varient="h7">{option.name}</Typography>
                          <Typography varient="p">{"~"+option.cal+" Cal"}</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    ))}
                    <Button component={Link} to={"/food"} variant="contained" color="primary" className={classes.button}>
                        Confirm Now
                    </Button>
                </Grid>
                </div>
                </div>
            </Fade>
            </Grid>
            </Modal>
        </Grid>
      );
    }
  }

TableReservation.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(useStyles)(TableReservation);