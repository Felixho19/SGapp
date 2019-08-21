import React, { Component } from 'react';
import { Link as RouterLink} from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import Flight from '@material-ui/icons/Flight';
import Search from '@material-ui/icons/Search';
import CardTravel from '@material-ui/icons/CardTravel';
import MoreHoriz from '@material-ui/icons/MoreHoriz';
import FastfoodIcon from '@material-ui/icons/Fastfood';
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
      <BottomNavigationAction component={RouterLink}
        to="/" label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction label="Search Flights" icon={<Search />} />
      <BottomNavigationAction label="Flight Status" icon={<Flight />} />
      <BottomNavigationAction label="My Trips" icon={<CardTravel />} />
      <BottomNavigationAction component={RouterLink} to='/food' label="Foods" icon={<FastfoodIcon />} />
      <BottomNavigationAction label="More" icon={<MoreHoriz />} />
    </BottomNavigation>
  );
}
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(Footer);