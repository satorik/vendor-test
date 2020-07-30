import React from 'react'
import { Box, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import {DialogMU} from './dialog'

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    width: '300px',
    cursor: 'pointer',
    display: 'flex'
  },
  text: {textAlign: 'center'}
}))

export const Item = ({visual, price, hasMoney, onBuyItem}) => {

  const classes = useStyles()
  const [itemBought, setItemBought] = React.useState(false)
  const [itemNotBought, setItemNotBought] = React.useState(false)

  const tryToBuy = () => {
    if (hasMoney >= price.price && price.amount !== 0) {
      onBuyItem()
      setItemBought(true)
    }
    else if (price.amount !== 0) setItemNotBought(true)
  }

  return (
    <>
    <DialogMU 
      open={itemBought}
      handleClose={() => setItemBought(false)}
      text={`Вы купили ${visual.rus} за ${price.price}р`}
    />
    <DialogMU 
    open={itemNotBought}
    handleClose={() => setItemNotBought(false)}
    text={`Для покупки ${visual.rus} за ${price.price}р вам не хватает ${price.price - hasMoney}р`}
    />
    <Paper className={classes.paper} onClick={() => tryToBuy()} style={ price.amount === 0 ? {backgroundColor: '#F0F0F0', cursor: 'default'} : {}}>
      <Box display="flex" flexDirection="column" justifyContent="space-between" height="100%">
        <Box>
          <Box display="flex" justifyContent="space-between">
            <div>{visual.icon}</div>
            <div>{price.price+'руб'}</div>
          </Box>
          <div className={classes.text}>{visual.rus}</div>
        </Box>
        <Box>
          <hr />
          Осталось {price.amount}
        </Box>
      </Box>
    </Paper>
    </>
  )
}
