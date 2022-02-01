function callThreeTimes(f) {
  f();
  f();
  f();
}

function cry() {
  console.log('boo hoo im so sad');
}

function rage() {
  console.log('i hate everything');
}

function repeatNTimes(action, num) {
  for (let i = 0; i < num; i++) {
    action();
  }
}

function pickOne(f1, f2) {
  let rand = Math.random();
  console.log(rand);
  if (rand < 0.5) {
    f1();
  } else {
    f2();
  }
}
