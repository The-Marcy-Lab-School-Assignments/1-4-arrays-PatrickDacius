const uppercaseAll = (...words) => {
  newArr = []
  for (let i = 0; i < words.length; i++) {
    newArr.push(words[i].toUpperCase())
  }
  return newArr
};

const destructureCoordinates = (coordinates) => {
  const [x, y, ...rest] = coordinates
  return `X is: ${x}, Y is: ${y}`; // no touching this line!
};
console.log(destructureCoordinates([1, 2, 3, 4, 5]))
module.exports = {
  uppercaseAll,
  destructureCoordinates,
};
