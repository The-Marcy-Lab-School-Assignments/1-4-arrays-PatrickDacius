const addToFrontOrBack = (arr, value, isFront) => {
  if (isFront === true) {
    return arr.unshift(value)
  } else if (isFront === false) {
    return arr.push(value)
  }
};
console.log(addToFrontOrBack([1, 2, 3, 4, 5], 6, true))

const reverseString = (str) => {
  return str.split('').reverse().join('')
};
console.log(reverseString("hello"))

const newArrayFullOf = (value, numOfValue) => {
  let arr = []
  for (let i = 0; i < numOfValue; i++) {
    arr.push(value)
  }
  return arr
};
console.log(newArrayFullOf(1, 5))

// math.floor( ) = round down 

const insertIntoMiddle = (arr, value) => {
  let middleOfArr = Math.floor([arr.length / 2])
  console.log(middleOfArr)
  arr.splice(middleOfArr, 0, value)
};
insertIntoMiddle([1, 2, 3, 4, 5])

const deleteFromMiddle = (arr) => {
  let middleOfArr = Math.floor([arr.length / 2])
  console.log(middleOfArr)
  arr.splice(middleOfArr, 1)
};


const isRightIndex = (arr, value, index) => {
  if (value === arr[index]) {
    return true
  } else false
};

const roundAllNumsDown = (arr) => {
  return arr.map((x) => Math.floor(x))

};

const getAllYCoordinates = (arrOfCoords) => {
  let newArray = []
  for (let i = 0; i < arrOfCoords.length; i++) {
    newArray.push(arrOfCoords[i][1])

  }
  return newArray
};


module.exports = {
  addToFrontOrBack,
  reverseString,
  newArrayFullOf,
  insertIntoMiddle,
  deleteFromMiddle,
  isRightIndex,
  roundAllNumsDown,
  getAllYCoordinates,
};
