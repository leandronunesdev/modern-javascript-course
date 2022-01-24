const fitBitData = {
  totalSteps: 308727,
  totalMiles: 211.7,
  avgCalorieBurn: 5755,
  workoutsThisWeek: '5 of 7',
  avgGoodSleep: '2:13',
  45: 'Forty five',
};

let data = {
  a: 1,
  b: 2,
  c: 3,
};

const numbers = {
  100: 'one hundred',
  16: 'sixteen',
  '76 trombones': 'great song',
};

const palette = {
  red: '#eb4d4b',
  yellow: '#f9ca24',
  blue: '#30336b',
};

const palette2 = palette;
palette2.green = '#ebf876';

let mysteryColor = 'yellow';

const userReviews = {};

userReviews['queenBee49'] = 4.0;

userReviews.mrSmith78 = 3.5;

userReviews['queenBee49'] += 2;

userReviews.mrSmith78++;

const student = {
  firstName: 'David',
  lastName: 'Jones',
  strengths: ['Music', 'Art'],
  exams: {
    midterm: 92,
    final: 88,
  },
};

const avg = (student.exams.midterm + student.exams.final) / 2;

const shoppingCart = [
  {
    product: 'Jenga Classic',
    price: 6.88,
    quantity: 1,
  },
  {
    product: 'Echo Dot',
    price: 29.99,
    quantity: 3,
  },
  {
    product: 'Fire Stick',
    price: 39.99,
    quantity: 2,
  },
];

const game = {
  player1: {
    username: 'Blue',
    playingAs: 'X',
  },
  player2: {
    username: 'Muffins',
    playingAs: 'O',
  },
  board: [
    ['O', null, 'X'],
    ['X', 'O', 'X'],
    [null, 'O', 'X'],
  ],
};

let nums = [1, 2, 3];
let mystery = [1, 2, 3];
let moreNums = nums;

const user = {
  username: 'CherryGarcia8',
  email: 'garcia@gmail.com',
  notifications: ['message'],
};

if (!user.notifications.length) {
  console.log('NO NEW NOTIFICATIONS!');
}
