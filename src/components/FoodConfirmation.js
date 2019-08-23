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

class FoodConfirmation extends React.Component {
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
          
        </ThemeProvider>
      );
    }
  }

FoodConfirmation.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(useStyles)(FoodConfirmation);