const nums = [3, 4, 5, 6, 7];

const product = nums.reduce((total, currentValue) => {
  return total * currentValue;
});

const grades = [87, 64, 96, 92, 88, 99, 73, 70, 64];

// const maxGrade = grades.reduce((max, currVal) => {
//   if (currVal > max) return currVal;
//   return max;
// });

const maxGrade = grades.reduce((max, currVal) => {
  return Math.max(max, currVal);
});

const minGrade = grades.reduce((min, currVal) => {
  return Math.min(min, currVal);
});

const sum = [10, 20, 30, 40, 50].reduce((sum, currVal) => {
  return sum + currVal;
});

const votes = [
  'y',
  'absent',
  'n',
  'y',
  'n',
  'y',
  'n',
  'y',
  'n',
  'n',
  'n',
  'y',
  'y',
];

// const results = votes.reduce((tally, val) => {
//   if (tally[val]) {
//     tally[val]++;
//   } else {
//     tally[val] = 1;
//   }
//   return tally;
// }, {});

const results = votes.reduce((tally, val) => {
  tally[val] = (tally[val] || 0) + 1;
  return tally;
}, {});

const books = [
  {
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25,
    genres: ['fiction', 'fantasy'],
  },
  {
    title: 'Changing My Mind',
    authors: ['Zadie Smith'],
    rating: 3.83,
    genres: ['nonfiction', 'essays'],
  },
  {
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42,
    genres: ['fiction', 'graphic novel', 'fantasy'],
  },
  {
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11,
    genres: ['fiction', 'fantasy'],
  },
  {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36,
    genres: ['fiction', 'historical fiction'],
  },
  {
    title: 'The Name of the Wind',
    authors: ['Patrick Rothfuss'],
    rating: 4.54,
    genres: ['fiction', 'fantasy'],
  },
  {
    title: 'The Overstory',
    authors: ['Richard Powers'],
    rating: 4.19,
    genres: ['fiction', 'short stories'],
  },
  {
    title: 'A Truly Horrible Book',
    authors: ['Xavier Time'],
    rating: 2.18,
    genres: ['fiction', 'garbage'],
  },
  {
    title: 'The Way of Kings',
    authors: ['Brandon Sanderson'],
    rating: 4.65,
    genres: ['fantasy', 'epic'],
  },
  {
    title: 'Lord of the flies',
    authors: ['William Golding'],
    rating: 3.67,
    genres: ['fiction'],
  },
];

const groupedByRatings = books.reduce((groupedBooks, book) => {
  const key = Math.floor(book.rating);
  if (!groupedBooks[key]) groupedBooks[key] = [];
  groupedBooks[key].push(book);
  return groupedBooks;
}, {});
