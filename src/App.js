import React from 'react'
import { Container, Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Machine from './pages/machine'
import Wallet from './pages/wallet'
import Deposit from './pages/deposit'
import Basket from './pages/basket'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(5),
  }
}))

function App() {

  const classes = useStyles()

  return (
    <Container maxWidth="sm" className={classes.root}>
      <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper><Deposit /></Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper><Wallet /></Paper>
          </Grid>
          <Grid item xs={12}>
            <Machine />
          </Grid>
          <Grid item xs={12}>
            <Paper><Basket /></Paper>
          </Grid>
      </Grid>
    </Container>
  );
}

export default App;
