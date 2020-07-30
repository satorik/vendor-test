export default (change, oldWallet, oldDeposit) => {
  let newWallet = {...oldWallet}
  let newDeposit = {...oldDeposit}
  let amount = change
  const coins = [10, 5, 2, 1]
  let i = 0

  while (amount > 0) {
    if (amount >= coins[i]) {
      newWallet = {
        ...newWallet,
        [coins[i]]:newWallet[coins[i]] + 1
      }
      newDeposit = {
        ...newDeposit,
        [coins[i]]:newDeposit[coins[i]] - 1
      }
      amount = amount - coins[i]
    }
    else i++
  }

  return {newWallet, newDeposit}
}