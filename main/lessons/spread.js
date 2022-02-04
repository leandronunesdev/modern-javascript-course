function giveMeFour(a, b, c, d) {
  console.log('a', a);
  console.log('b', b);
  console.log('c', c);
  console.log('d', d);
}

const colors = ['red', 'orange', 'yellow', 'green'];

const cephalopods = [
  'dumbo octopus',
  'humboldt squid',
  'flamboyant cuttlefish',
];

const gastropods = ['giant african snail', 'banana slug', 'variable neon slug'];

const cnidaria = ['fire coral', 'moon jelly'];

const mollusca = [...cephalopods, ...gastropods];

const inverts = [...cnidaria, ...gastropods, ...cephalopods];

const cephCopy = [...cephalopods];

const feline = {
  legs: 4,
  family: 'Felidae',
};

const canine = {
  family: 'Caninae',
  furry: true,
};

const dog = {
  ...canine,
  isPet: true,
  adorable: true,
};

const houseCat = {
  ...feline,
  isGrumpy: true,
  personality: 'unpredictable',
};

const catDog = {
  ...canine,
  ...feline,
};

const tripod = {
  ...canine,
  legs: 3,
};

const catDogClone = {
  ...catDog,
};

const random = [...'hello', { ...catDog }];
