const runner = {
  first: 'Eliud',
  last: 'Kipchoge',
  country: 'Kenya',
  title: 'Elder of the Order of the Golden Heart of Kenya',
};

// function print(person) {
//   const { first, last, title } = person;
//   console.log(`${first} ${last}, ${title}`);
// }

function print({ first, last, title }) {
  console.log(`${first} ${last}, ${title}`);
}

const response = ['HTTP/1.1', '200 OK', 'application/json'];

function parseResponse([protocol, statusCode, contentType]) {
  console.log(`Status: ${statusCode}`);
}
