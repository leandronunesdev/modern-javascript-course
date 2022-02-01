// const triple = multiplyBy(3);
// triple(5);

// const double = multiplyBy(2);
// double(5);

function multiplyBy(num) {
  return function (x) {
    return x * num;
  };
}

const triple = multiplyBy(3);
const double = multiplyBy(2);
const halve = multiplyBy(0.5);

function makeBetweenFunc(x, y) {
  return function (num) {
    return num >= x && num <= y;
  };
}

const isChild = makeBetweenFunc(0, 18);

const isInNineties = makeBetweenFunc(1990, 2000);

const isNiceWeather = makeBetweenFunc(60, 79);
