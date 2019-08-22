import React from 'react';
import { withStyles, CssBaseline } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import Rank from './Rank';

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
    flexGrow: 1
  },
});

class FoodDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
      const { classes } = this.props;
      return(
        <ThemeProvider theme={Theme}>
            <div className={classes.root}>
              <Grid>

              </Grid>
           </div>
        </ThemeProvider>
      );
    }
  }

FoodDetail.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(useStyles)(FoodDetail);