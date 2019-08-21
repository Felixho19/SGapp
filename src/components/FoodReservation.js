import React from 'react';
import { withStyles, CssBaseline } from '@material-ui/core';
import { fade, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

import Dish1 from './img/food1.jpg';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

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
      }
    }
});
const useStyles = theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1,
    fontFamily: 'arial',
    position: 'relative',
    marginRight: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginRight: theme.spacing(1),
      width: 'auto',
    }
  },
  subTitle: {
    flexGrow: 50,
    fontFamily: 'arial',
    marginRight: 0,
  },
  rightMost: {
    fontFamily: 'arial',
    textAlign: 'right',
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    }
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  deck: {
    justifyContent: 'center' 
  },
  rankBar: {
    backgroundColor: '#5c6bc0'
  }
});
class FoodReservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          open : false
        };
    }
    handleClick(){
      this.setState({open: !this.state.open});
    }
    handleClickAway(){
      this.setState({open: false});
    }
    render() {
      const { classes } = this.props;
      return(
        <ThemeProvider theme={Theme}>
            <div className={classes.root}>
            <AppBar position="static" color="primary">
                <Toolbar>
                <Typography variant="h5" color="default" className={classes.title}>
                  Hong Kong
                </Typography>
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder="Search…"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </div>
                </Toolbar>
            </AppBar>
            </div>
            <Toolbar className={classes.rankBar}>
              <Typography variant="h5" color="inherit" className={classes.title}>
                  Recommend dishes
              </Typography>
              <Typography variant="h7" color="secondary" className={classes.right_most}>
                  See All
              </Typography>
            </Toolbar>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={Dish1}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Dish1's name
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={Dish1}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Dish1's name
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
            </Grid>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={Dish1}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Dish1's name
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={Dish1}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Dish1's name
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
            </Grid>
            <CssBaseline/>
            <Toolbar className={classes.rankBar}>
              <Typography variant="h5" color="inherit" className={classes.title}>
                  Chart
              </Typography>
              <Typography variant="h6" color="secondary" className={classes.subTitle}>
                  Most popular
              </Typography>
              <Typography variant="h7" color="secondary" className={classes.rightMost}>
                  See All
              </Typography>
            </Toolbar>
            <Rank />
        </ThemeProvider>
      );
    }
  }

FoodReservation.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(useStyles)(FoodReservation);