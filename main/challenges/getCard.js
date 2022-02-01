// MY SOLUTION

const values = ['2', '3', '4', '5', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const suits = ['clubs', 'spades', 'hearts', 'diamonds'];

const getCard = () => {
  let valueIndex = Math.floor(Math.random() * values.length);
  let suitIndex = Math.floor(Math.random() * suits.length);
  let card = {
    value: values[valueIndex],
    suit: suits[suitIndex],
  };
  console.log(card);
};

// TEACHER`S SOLUTION

// function getCard() {
// 	const values = [
// 		'1',
// 		'2',
// 		'3',
// 		'4',
// 		'5',
// 		'6',
// 		'7',
// 		'8',
// 		'9',
// 		'10',
// 		'J',
// 		'Q',
// 		'K',
// 		'A'
// 	];
// 	const valIdx = Math.floor(Math.random() * values.length);
// 	const value = values[valIdx];

// 	const suits = [ 'clubs', 'spades', 'hearts', 'diamonds' ];
// 	const suitIdx = Math.floor(Math.random() * suits.length);
// 	const suit = suits[suitIdx];
// 	return { value: value, suit: suit };
// }

function pick(arr) {
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
}

function getCardTwo() {
  const values = ['2', '3', '4', '5', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

  const suits = ['clubs', 'spades', 'hearts', 'diamonds'];

  return {
    value: pick(values),
    suit: pick(suits),
  };
}
