import * as actionTypes from '../actions/actionTypes'
import {updateObject} from '../../utils/updateObject'
import calcChange from '../../utils/calcChange'

const initialState = {
  stock: {
    tea: {
      amount: 10,
      price: 13
    },
    coffee: {
      amount: 20,
      price: 18
    },
    latte: {
      amount: 20,
      price: 21
    },
    juice: {
      amount: 15,
      price: 35,
    }
  },
  deposit: {
    1: 100,
    2: 100,
    5: 100,
    10: 100
  },
  wallet: {
    1: 10,
    2: 30,
    5: 20,
    10: 15 
  },
  basket: {
    tea: 0,
    coffee: 0,
    latte: 0,
    juice: 0
  },
  moneyIn: 0 
}

const reducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case actionTypes.TAKE_ITEM: return updateObject(state,
      {stock: updateObject(state.stock, {[action.item]: 
        updateObject(state.stock[action.item], {amount: state.stock[action.item].amount-1})
        }),
      basket: updateObject(state.basket, {[action.item]: state.basket[action.item]+1}),
      moneyIn: state.moneyIn - state.stock[action.item].price
      })
    case actionTypes.GIVE_MONEY: return updateObject(state, 
      {wallet: updateObject(state.wallet, {[action.money]: state.wallet[action.money]-1}), 
      moneyIn: state.moneyIn+parseInt(action.money),
      deposit: updateObject(state.deposit, {[action.money]: state.deposit[action.money]+1}) 
      })
    case actionTypes.GIVE_CHANGE: {
      const {newWallet, newDeposit} = calcChange(action.money, state.wallet, state.deposit)
      return  updateObject(state, 
       { wallet: newWallet, deposit: newDeposit, moneyIn: 0})
    }
    default: return state
  }
}

export default reducer