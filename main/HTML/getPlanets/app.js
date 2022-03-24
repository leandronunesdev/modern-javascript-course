// // function greet() {
// //   return 'hello';
// // }

// async function greet() {
//   return 'hello';
// }
// greet().then((val) => {
//   console.log('Promise resolved with:', val);
// });

// async function add(x, y) {
//   if (typeof x !== 'number' || typeof y !== 'number') {
//     throw 'X and Y must be numbers!';
//   }
//   return x + y;
// }

// function add(x, y) {
//   return new Promise((resolve, reject) => {
//     if (typeof x !== 'number' || typeof y !== 'number') {
//       reject('X and Y must be numbers');
//     }
//     resolve(x + y);
//   });
// }

// add(6, 7)
//   .then((val) => {
//     console.log('Promise resolved with:', val);
//   })
//   .catch((err) => {
//     console.log('Promise rejected with:', err);
//   });

// function getPlanets() {
//   return axios.get('https://swapi.dev/api/planets/');
// }

// getPlanets().then((res) => {
//   console.log(res.data);
// });

// async function getPlanets() {
//   const res = await axios.get('https://swapi.dev/api/planetss/');
//   console.log(res.data);
// }

// getPlanets().catch((err) => {
//   console.log('In catch');
//   console.log(err);
// });

async function getPlanets() {
  try {
    const res = await axios.get('https://swapi.dev/api/planetss/');
    console.log(res.data);
  } catch (e) {
    console.log('in catch', e);
  }
}

getPlanets();
