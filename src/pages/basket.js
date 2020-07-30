import React from 'react'
import { connect } from 'react-redux'
import {Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const STOCK = {
  tea: { rus: 'Чай'},
  coffee: {rus: 'Кофе'},
  latte: {rus: 'Кофе с молоком'},
  juice: {rus: 'Сок'}
}

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1)
  }
}))

const Basket = ({basket}) => {
  
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography>Куплено:</Typography>
      {Object.keys(basket).map(item => <Typography key={item}>{STOCK[item].rus} : {basket[item]}</Typography>)}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    basket: state.machine.basket
  }
}

export default connect(mapStateToProps)(Basket)