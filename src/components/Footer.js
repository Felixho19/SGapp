import React, { Component } from 'react';
import { Link as RouterLink} from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core';
import {Home, Flight, Search, Fastfood} from '@material-ui/icons';
import PropTypes from 'prop-types';

const useStyles = {
  root: {
    width: '100%',
    justifyContent: 'center'
  },
};

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value : 0,
    };
    this.setValue = this.setValue.bind(this);
  }
  setValue(v){
    this.setState({value:v});
  }
  render(){
  const { classes } = this.props;
  return (
    <BottomNavigation
      value={this.state.value}
      onChange={(event, newValue) => {
        this.setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction component={RouterLink} to="/" label="Home" icon={<Home />} />
      <BottomNavigationAction label="Search" icon={<Search />} />
      <BottomNavigationAction label="Flights" icon={<Flight />} />
      <BottomNavigationAction component={RouterLink} to='/food' label="Foods" icon={<Fastfood />} />
    </BottomNavigation>
  );
}
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(Footer);