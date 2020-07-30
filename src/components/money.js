import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems:'center',
    marginBottom: theme.spacing(1)
  },
  nominal: {
    backgroundColor: theme.palette.warning.main,
    width: '20px',
    height: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2px',
    marginRight: theme.spacing(2)
  },
  count: {
    padding: '2px',
    margin: '0',
    marginRight: theme.spacing(2)
  }
}))

export const Money = ({nom, count, onGiveMoney}) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.nominal}>{nom}</div>
      <p className={classes.count}>({count})</p>
      {onGiveMoney ? <ArrowForwardIcon onClick={onGiveMoney} color="primary" /> : null}
    </div>
  )
}
