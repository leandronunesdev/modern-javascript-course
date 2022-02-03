const numbers = [20, 21, 22, 23, 24, 25, 26, 27];
const words = ['asap', 'byob', 'rsvp', 'diy'];

const doubles = numbers.map(function (num) {
  return num * 2;
});

const numDetail = numbers.map(function (n) {
  return {
    value: n,
    isEven: n % 2 === 0,
  };
});

const doubles2 = [];
for (let num of numbers) {
  doubles2.push(num * 2);
}

const abbrevs = words.map(function (word) {
  return word.toLocaleUpperCase().split('').join('.');
});

const books = [
  {
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25,
  },
  {
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42,
  },
  {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36,
  },
];

// const test = books.map(function (book) {
//   return console.log(`The book is ${book.title}`);
// });

const titles = books.map(function (b) {
  return b.title;
});
