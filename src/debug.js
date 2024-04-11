/* eslint-disable no-param-reassign */
const clearArr = (arr) => {
  // splice allows you to remove elements within an array.
  // .splice(<index start point>, <# of elemnts you want to remove>)
  // in this case we used arr.length in the # of elements to removes place because arr.length will give us all the elements within the array 
  arr.splice(0, arr.length)
  return arr
};
console.log(clearArr([1, 2, 3, 4, 5]))



const getFirstItem = (array) => {
  return array[0]
};
console.log(getFirstItem([1, 2, 3, 4, 5]))


module.exports = {
  clearArr,
  getFirstItem,
};
