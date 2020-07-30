export default obj => {
  return Object.keys(obj).reduce( (acc, el) => acc + parseInt(el)*obj[el], 0)
}