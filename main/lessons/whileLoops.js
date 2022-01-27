// for (let i = 0; i <= 5; i++) {
//   console.log(i);
// }
// let j = 0;
// while (j <= 5) {
//   console.log(j);
//   j++;
// }

const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);

while (true) {
  if (target === guess) break;
  console.log(`Target: ${target} Guess: ${guess}`);

  guess = Math.floor(Math.random() * 10);
}

console.log(`Target: ${target} Guess: ${guess}`);
console.log(`CONGRATS`);
