let loggedInUser;

//IF THERE ISN`T A LOGGED IN USER

if (!loggedInUser) {
  console.log('GET OUT OF HERE');
}

let flavor = 'watermelon';

// if (flavor !== 'grape' && flavor !== 'cherry') {
//   console.log('we dont have that flavor');
// }

if (!(flavor === 'grape' || flavor === 'cherry')) {
  console.log('WE ONLY HAVE GRAPE AND CHERRY');
}
