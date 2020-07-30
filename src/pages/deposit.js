import React from 'react'
import { connect } from 'react-redux'
import getSum from '../utils/getSum'
import { Money } from '../components/money'
import { makeStyles } from '@material-ui/core/styles'
import {Typography} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1)
  }
}))

const Deposit = ({deposit}) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      {Object.keys(deposit).map(money => <Money 
        key={money} 
        nom={money} 
        count={deposit[money]}
        />)}
      <Typography>Сумма: {getSum(deposit)}</Typography>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    deposit: state.machine.deposit
  }
}

export default connect(mapStateToProps)(Deposit)