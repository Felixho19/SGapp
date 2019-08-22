import React from 'react';
import {Link} from 'react-router-dom';
import { withStyles, Button, Grid, Paper, Chip, 
  Table, TableBody, TableRow, TableCell, GridListTileBar, 
  GridListTile, GridList, Typography, Modal, Backdrop, Fade} from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Dish1 from './img/food1.jpg';
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
  paperTable: {
    marginTop: theme.spacing(3),
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    width: "80%"
  },
  paperButton:{
    padding: theme.spacing(1)
  },
  rootChip: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
    fontFamily: 'arial',
    position: 'relative',
    marginLeft: 0,
    width: '25%',
    [theme.breakpoints.up('sm')]: {
      marginRight: theme.spacing(1),
      width: 'auto',
    },
  },
  gridList: {
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
  button: {
    width: "100%",
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
});

class FoodDetail extends React.Component {
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
      const {id} = this.props.match.params;
      return(
        <ThemeProvider theme={Theme}>
                <GridList cellHeight={50} spacing={1} className={classes.gridList}>
                    <GridListTile key={id} cols={2} rows={4}>
                      <img src={foods[id].image} alt={foods[id].name} />
                      <GridListTileBar
                        title={foods[id].name}
                        titlePosition="bottom"
                        className={classes.titleBar}
                      />
                    </GridListTile>
                </GridList>
                <Grid container className={classes.root} spacing={2}>
                  <Grid item xs={12}>
                    <Grid container>
                        <Typography variant="h6">Nutrition</Typography>
                    </Grid>
                    <Paper className={classes.paperTable}>
                      <Table className={classes.table} size="small">
                        <TableBody>
                          <TableRow key={"Calories"}>
                            <TableCell component="th" scope="row">
                                {"Calories"}
                            </TableCell>
                            <TableCell align="right">{foods[id].cal+" Cal"}</TableCell>
                            </TableRow>
                          {foods[id].nutrition.map(row => (
                            <TableRow key={row.name}>
                              <TableCell component="th" scope="row">
                                {row.name}
                              </TableCell>
                              <TableCell align="right">{row.value+"%"}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </Paper>
                    <Grid container>
                        <Typography variant="h6">Description</Typography>
                        <Typography variant="p">{foods[id].desc}</Typography>
                    </Grid>

                    <Grid container>
                    <Button onClick={this.handleOpen.bind(this)} variant="contained" color="primary" className={classes.button}>
                        Order Now
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
                  </Grid>
                </Grid>
        </ThemeProvider>
      );
    }
  }

FoodDetail.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(useStyles)(FoodDetail);