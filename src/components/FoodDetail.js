import React from 'react';
import { withStyles, Button, Grid, Chip, GridListTileBar, GridListTile, GridList, Typography, Modal, Backdrop, Fade} from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Dish1 from './img/food1.jpg';
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
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2),
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
      return(
        <ThemeProvider theme={Theme}>
                <GridList cellHeight={50} spacing={1} className={classes.gridList}>
                    <GridListTile key={Dish1} cols={2} rows={4}>
                      <img src={Dish1} alt={"Dish1"} />
                      <GridListTileBar
                        title={"Dish1"}
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
                    <div className={classes.rootChip}>
                      <Chip label="Basic Chip" className={classes.chip} />
                      <Chip label="Basic Chip" className={classes.chip} />
                      <Chip label="Basic Chip" className={classes.chip} />
                      <Chip label="Basic Chip" className={classes.chip} />
                      <Chip label="Basic Chip" className={classes.chip} />
                      <Chip label="Basic Chip" className={classes.chip} />
                      <Chip label="Basic Chip" className={classes.chip} />
                    </div>
                    <Grid container>
                        <Typography variant="h6">Action</Typography>
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
                            <h5 id="transition-modal-title">Date</h5>
                            
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