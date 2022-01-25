const posts = [
  {
    title: 'cool video',
    link: 'http://www.blah.com',
    username: 'sillyGoose98',
  },
  {
    title: 'cool video',
    link: 'http://www.blah.com',
    username: 'sillyGoose98',
  },
  {
    title: 'cool video',
    link: 'http://www.blah.com',
    username: 'sillyGoose98',
  },
  {
    title: 'cool video',
    link: 'http://www.blah.com',
    username: 'sillyGoose98',
  },
];

// for (let i = 1; i <= 10; i++) {
//   console.log('HELLO:', i);
// }

// for (let i = 1; i <= 10; i += 3) {
//   console.log('HELLO:', i);
// }

// for (let num = 1; num <= 20; num++) {
//   console.log(`${num}x${num} =  ${num * num}`);
// }

// for (let i = 200; i >= 0; i -= 25) {
//   console.log(i);
// }
// console.log('AFTER THE LOOP!');

const examScores = [98, 77, 84, 91, 57, 66];

for (let i = 0; i < examScores.length; i++) {
  console.log(i, examScores[i]);
}

const myStudents = [
  {
    firstName: 'Zeus',
    grade: 86,
  },
  {
    firstName: 'Artemis',
    grade: 97,
  },
  {
    firstName: 'Hera',
    grade: 72,
  },
  {
    firstName: 'Apollo',
    grade: 90,
  },
];

// for (let i = 0; i < myStudents.length; i++) {
//   let student = myStudents[i];
//   console.log(`${student.firstName} scored ${student.grade}`);
// }

let total = 0;

for (let i = 0; i < myStudents.length; i++) {
  let student = myStudents[i];
  total += student.grade;
}

console.log(total / myStudents.length);

// const word = 'stressed';
// let reversedWord = '';
// for (let i = word.length - 1; i >= 0; i--) {
//   reversedWord += word[i];
//   console.log(reversedWord);
// }
