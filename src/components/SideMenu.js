import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TableReservation from './TableReservation';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

const useStyles = makeStyles(theme => ({
  root: {
      
  },
  speedDial: {
    position: 'fixed',
    bottom: theme.spacing(8),
    right: theme.spacing(3),
  },
}));

const actions = [
  { icon: <CalendarTodayIcon />, name: 'Book table' },
];

export default function SpeedDialTooltipOpen() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [openBook, setOpenBook] = React.useState(false);
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
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
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
            onClick={handleClick2}
          />
        ))}
      </SpeedDial>
        {openBook ? <TableReservation setOpenBook={setOpenBook}/> : null }
    </div>
  );
}