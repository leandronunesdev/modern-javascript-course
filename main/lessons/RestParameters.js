// function sum() {
//   const argsArr = [...arguments];
//   return argsArr.reduce((total, currVal) => {
//     return total + currVal;
//   });
// }

// function fullName(first, last) {
//   console.log(arguments);
//   console.log(first);
// }

function sum(...nums) {
  return nums.reduce((total, currVal) => {
    return total + currVal;
  });
}

function fullName(first, last, ...titles) {
  console.log('first', first);
  console.log('last', last);
  console.log('titles', titles);
}

const multiply = (...nums) => nums.reduce((total, currVal) => total * currVal);
