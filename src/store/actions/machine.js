import * as actionTypes from './actionTypes'

export const gotError = (error) => {
  return {
    type: actionTypes.GOT_ERROR,
    error
  }
}

export const takeItem = (item) => {
  return {
    type: actionTypes.TAKE_ITEM,
    item
  }
}

export const giveMoney = (money) => {
  return {
    type: actionTypes.GIVE_MONEY,
    money
  }
}

export const giveChange = (money) => {
  return {
    type: actionTypes.GIVE_CHANGE,
    money
  }
}
