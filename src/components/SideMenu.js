import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom'
import TableReservation from './TableReservation';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

const useStyles = makeStyles(theme => ({
  root: {
      
  },
  speedDial: {
    position: 'fixed',
    bottom: theme.spacing(8),
    right: theme.spacing(3),
  },
}));

export default function SpeedDialTooltipOpen() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [openBook, setOpenBook] = React.useState(false);
  const [redirect, setRedirect] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);

  const handleVisibility = () => {
    setOpen(false);
    setHidden(prevHidden => !prevHidden);
  };
  const handleClick = () => {
    setOpen(prevOpen => !prevOpen);
  };
  const handleClick2 = () => {
    setOpen(prevOpen => !prevOpen);
    setOpenBook(true);
  };
  const handleClick3 = () => {
    setRedirect(true);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const actions = [
    { icon: <CalendarTodayIcon />, name: 'Book table', act: handleClick3 },
    { icon: <CheckCircleOutlineIcon/>, name: 'Confirm Check-in', act: handleClick2},
  ];

  return (
    <div className={classes.root}>
      {redirect ? <Redirect to='/checkout' /> : null}
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        className={classes.speedDial}
        hidden={hidden}
        icon={<SpeedDialIcon />}
        onBlur={handleClose}
        onClick={handleClick}
        onClose={handleClose}
        onFocus={handleOpen}
        onMouseEnter={handleOpen}
        onMouseLeave={handleClose}
        open={open}
      >
        {actions.map(action => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={action.act}
          />
        ))}
      </SpeedDial>
        {openBook ? <TableReservation setOpenBook={setOpenBook}/> : null }
    </div>
  );
}