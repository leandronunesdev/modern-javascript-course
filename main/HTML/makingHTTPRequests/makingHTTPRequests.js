// // const firstReq = new XMLHttpRequest();
// // firstReq.addEventListener('load', function () {
// //   console.log('First request worked');
// //   const data = JSON.parse(this.responseText);
// //   const filmURL = data.results[0].films[0];
// //   const filmReq = new XMLHttpRequest();
// //   filmReq.addEventListener('load', function () {
// //     console.log('Second request worked');
// //     const filmData = JSON.parse(this.responseText);
// //     console.log(filmData);
// //   });
// //   filmReq.addEventListener('error', function (e) {
// //     console.log('error', e);
// //   });
// //   filmReq.open('GET', filmURL);
// //   filmReq.send();
// //   //   console.log(data);
// //   //   for (let planet of data.results) {
// //   //     console.log(planet.name);
// //   //   }
// // });
// // firstReq.addEventListener('error', () => {
// //   console.log('Error');
// // });
// // firstReq.open('GET', 'https://swapi.dev/api/planets/');
// // firstReq.send();
// // console.log('Request Sent');

// const checkStatusAndParse = (response) => {
//   if (!response.ok) throw new Error(`Status code error: ${response.status}`);
//   return response.json();
// };

// const printPlanets = (data) => {
//   console.log('Loaded 10 planets');
//   for (let planet of data.results) {
//     console.log(planet.name);
//   }
//   return Promise.resolve(data.next);
// };

// const fetchNextPlanets = (url = 'https://swapi.dev/api/planets/') => {
//   return fetch(url);
// };

// fetchNextPlanets()
//   .then(checkStatusAndParse)
//   .then(printPlanets)
//   .then(fetchNextPlanets)
//   .then(checkStatusAndParse)
//   .then(printPlanets)
//   .catch((err) => {
//     console.log('Something went wrong');
//     console.log(err);
//   });

// axios
//   .get('https://swapi.dev/api/planets/')
//   .then((res) => {
//     console.log(res.data);
//   })
//   .catch((err) => {
//     console.log('IN CATCH CALLBACK');
//     console.log(err);
//   });

const fetchNextPlanets = (url = 'https://swapi.dev/api/planets/') => {
  return axios.get(url);
};

const printPlanets = ({ data }) => {
  console.log(data);
  for (let planet of data.results) {
    console.log(planet.name);
  }
  return Promise.resolve(data.next);
};

fetchNextPlanets()
  .then(printPlanets)
  .then(fetchNextPlanets)
  .then(printPlanets)
  .catch((err) => {
    console.log('error', err);
  });
