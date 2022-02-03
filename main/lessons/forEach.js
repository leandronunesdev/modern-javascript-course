const numbers = [20, 21, 22, 23, 24, 25, 26, 27];

// // numbers.forEach(function (num) {
// //   console.log(num * 2);
// // });

// function printTriple(n) {
//   console.log(n * 3);
// }

// numbers.forEach(printTriple);

numbers.forEach(function (num, idx) {
  console.log(idx, num);
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

// books.forEach(function (book) {
//   console.log(book.title.toUpperCase());
// });

// for (let book of books) {
//   console.log(book.title.toUpperCase());
// }
