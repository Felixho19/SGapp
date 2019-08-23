import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Paper, Typography, ButtonBase} from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import rankImg from './img/rank_img.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function ComplexGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={rankImg} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                    <StarIcon /> Hot pot
                </Typography>
                <Typography gutterBottom variant="subtitle1">
                    <StarIcon /> Chips
                </Typography>
                <Typography gutterBottom variant="subtitle1">
                    <StarIcon /> Cola
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}