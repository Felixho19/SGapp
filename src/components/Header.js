import React, { Component } from 'react';
import { withStyles, AppBar, Toolbar, Typography, IconButton, MenuItem, Menu } from '@material-ui/core';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Logo from './img/logo.png';

const useStyles = (theme => ({
  root: {
    flexGrow: "-moz-initial",
    width: "100%"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

class Header extends Component{
  constructor(props) {
    super(props);
    this.state = {
      anchorEl : null,
      open : Boolean(null)
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleMenu = this.handleMenu.bind(this);
  }
  handleMenu(event) {
    this.setState({anchorEl: event.currentTarget, open: Boolean(event.currentTarget)});
  }

  handleClose() {
    this.setState({anchorEl: null, open : Boolean(null)});
  }
  render(){
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" color="#e0f7fa">
          <Toolbar>
            <Typography component={Link} to="/" variant="h6" className={classes.title}>
              <img
                src={Logo}
                width="150"
                height="54"
                className="d-inline-block align-top"
              />
            </Typography>
            {this.props.auth && (
              <div>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={this.state.anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={this.state.open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                  <MenuItem onClick={this.handleClose}>My account</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(Header);