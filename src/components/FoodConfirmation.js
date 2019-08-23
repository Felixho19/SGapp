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

});

class FoodConfirmation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          open: false
        };
    }
    render() {
      const { classes } = this.props;
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