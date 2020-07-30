import React from 'react'
import {  Paper, Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import * as actions from '../store/actions'
import EmojiFoodBeverageIcon from '@material-ui/icons/EmojiFoodBeverage'
import LocalCafeIcon from '@material-ui/icons/LocalCafe'
import LocalCafeOutlinedIcon from '@material-ui/icons/LocalCafeOutlined'
import LocalBarIcon from '@material-ui/icons/LocalBar'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import {Item} from '../components/item'

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(1),
    backgroundColor: theme.palette.warning.main
  }
}))

const STOCK = {
  tea: {
    rus: 'Чай',
    icon: <EmojiFoodBeverageIcon  fontSize="large" />
  },
  coffee: {
    rus: 'Кофе',
    icon: <LocalCafeIcon fontSize="large" />
  },
  latte: {
    rus: 'Кофе с молоком',
    icon: <LocalCafeOutlinedIcon fontSize="large" />
  },
  juice: {
    rus: 'Сок',
    icon: <LocalBarIcon fontSize="large" />
  }
}

const Machine = ({ stock, moneyIn, onTakeItem, onGiveChange }) => {

  const classes = useStyles()

  return (
    <Paper className={classes.paper}> 
     <Box display="flex" justifyContent="space-between">
      <Typography>Внесено: {moneyIn}р</Typography>
      <Typography>Сдача: {moneyIn}р 
          <ArrowUpwardIcon color="error" onClick={() => onGiveChange(moneyIn)} style={{cursor: 'pointer'}}/>
      </Typography>
     </Box>
     <Box display="flex" justifyContent="space-evenly" flexWrap="wrap" >
      {Object.keys(STOCK).map(item => <Item 
        key={item}
        visual={STOCK[item]} 
        price={stock[item]}
        hasMoney={moneyIn}
        onBuyItem={() => onTakeItem(item)}
      />
      )}
      </Box>
    </Paper>
  )
}
const mapStateToProps = state => {
  return {
    stock: state.machine.stock,
    moneyIn: state.machine.moneyIn
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onTakeItem: (item) => dispatch(actions.takeItem(item)),
    onGiveChange: (money) => dispatch(actions.giveChange(money))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Machine)