import React from 'react';
import { withStyles, CssBaseline, AppBar, Toolbar, Typography, Link, InputBase,
  Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Button,
  FormControl, NativeSelect, FormHelperText} from '@material-ui/core';
import { fade, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import {Link as RouterLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import SearchIcon from '@material-ui/icons/Search';
import foods from './Data';
import Menu from './SideMenu';
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
  title: {
    flexGrow: 1,
    fontFamily: 'arial',
    position: 'relative',
    marginRight: 0,
    width: '25%',
    [theme.breakpoints.up('sm')]: {
      marginRight: theme.spacing(1),
      width: 'auto',
    }
  },
  subTitle: {
    flexGrow: 50,
    width: '50%',
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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
    backgroundColor: theme.palette.common.white,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(0),
    marginLeft: 0,
    width: '50%',
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
    width: "45%",
    height: 250,
    margin: theme.spacing(1)
  },
  media: {
    height: 100,
  },
  deck: {
    justifyContent: 'center' 
  },
  rankBar: {
    backgroundColor: '#5c6bc0'
  }
});

const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

class FoodList extends React.Component {
  render(){
    const { classes } = this.props;
    return(
      <div>
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
              image={foods['1'].image}
              title={foods['1'].name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {foods['1'].name}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button component={RouterLink} to='/food/1' size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={foods['2'].image}
              title={foods['2'].name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {foods['2'].name}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button component={RouterLink} to='/food/2'size="small" color="primary">
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
              image={foods['3'].image}
              title={foods['3'].name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {foods['3'].name}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button component={RouterLink} to='/food/3' size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={foods['4'].image}
              title={foods['4'].name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {foods['4'].name}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button component={RouterLink} to='/food/4' size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
        </Grid>
      </div>
    );
  }
}

class FoodReservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          open : false,
          catagory: 2
        };
    }
    handleClick(){
      this.setState({open: !this.state.open});
    }
    handleClickAway(){
      this.setState({open: false});
    }
    handleChange(event) {
      this.setState({catagory: event.target.value});
    }
    render() {
      const { classes } = this.props;
      return(
        <ThemeProvider theme={Theme}>
            <div className={classes.root}>
            <AppBar position="static" color="primary">
                <Toolbar>
                <form className={classes.title} autoComplete="off">
                <FormControl className={classes.formControl}>
                  <NativeSelect
                    className={classes.selectEmpty}
                    value={this.state.catagory}
                    name="style"
                    onChange={this.handleChange.bind(this)}
                    input={<BootstrapInput />}
                  >
                    <option value="" disabled>
                      Dish Style
                    </option>
                    <option value={1}>Hong Kong</option>
                    <option value={2}>Singapore</option>
                    <option value={3}>Japanese</option>
                  </NativeSelect>
                </FormControl>
                  </form>
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
              <Typography variant="h5" color="secondary" className={classes.title}>
                  <b>Recommended dishes</b>
              </Typography>
              <Typography component={Link} variant="h7" color="secondary" className={classes.right_most}>
                  See All
              </Typography>
            </Toolbar>
            <FoodList classes={classes}/>
            <CssBaseline/>
            <Toolbar className={classes.rankBar}>
              <Typography variant="h5" color="secondary" className={classes.title}>
                  <b>Chart</b>
              </Typography>
              <Typography variant="h6" color="secondary" className={classes.subTitle}>
                  Most popular
              </Typography>
              <Typography>
                <Link variant="h7" color="secondary" className={classes.rightMost}>
                  See All
                </Link>
              </Typography>
            </Toolbar>
            <Rank />
            <Menu />
        </ThemeProvider>
      );
    }
  }

FoodReservation.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(useStyles)(FoodReservation);