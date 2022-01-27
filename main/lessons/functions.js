// function grumpus() {
//   console.log('ugh');
// }

// grumpus();

// for (let i = 0; i < 50; i++) {
//   grumpus();
// }

function rollDie() {
  let roll = Math.floor(Math.random() * 6) + 1;
  console.log(`Rolled: ${roll}`);
}

function throwDice(numRolls) {
  for (let i = 0; i < numRolls; i++) {
    rollDie();
  }
}

const greet = (name) => {
  console.log(`Hi, ${name}!`);
};

const square = (num) => {
  console.log(num * num);
};

function add(x, y) {
  return x + y;
}

const divide = (a, b) => {
  console.log(a / b);
};

// const isPurple = (color) => {
//   if (color.toLowerCase() === 'purple') {
//     return true;
//   }
//   return false;
// };

// const isPurple = (color) => {
//   return color.toLowerCase() === 'purple';
// };

const containsPurple = (arr) => {
  for (let color of arr) {
    if (color === 'purple' || color === 'magenta') {
      return true;
    }
  }
  return false;
};
