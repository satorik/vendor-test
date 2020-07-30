import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../store/actions'
import { Money } from '../components/money'
import { makeStyles } from '@material-ui/core/styles'
import {Typography} from '@material-ui/core'
import getSum from '../utils/getSum'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1)
  }
}))

const Wallet = ({wallet, onGiveMoney}) => {

  const classes = useStyles()
  return (
    <div className={classes.root}>
      {Object.keys(wallet).map(money => <Money 
        key={money} 
        nom={money} 
        count={wallet[money]}
        onGiveMoney={() => onGiveMoney(money)} />)}
      <Typography>Сумма: {getSum(wallet)}</Typography>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    wallet: state.machine.wallet
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onGiveMoney: (nominal) => dispatch(actions.giveMoney(nominal)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wallet)