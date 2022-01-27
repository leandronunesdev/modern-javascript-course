//MY SOLUTION I

const avgFunction = (array) => {
  let sum = 0;
  let avg = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    avg = sum / array.length;
  }
  console.log(`The average is ${avg}`);
};

//TEACHER`S SOLUTION

function avg(arr) {
  let total = 0;
  for (let num of arr) {
    total += num;
  }
  let res = total / arr.length;
  return res;
}
