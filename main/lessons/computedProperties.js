const role = 'host';
const person = 'Jools Holland';
const role2 = 'Director';
const person2 = 'James Cameron';

// const team = {};
// team[role] = person;
// team[role2] = person2;

const team = {
  [role]: person,
  [role2]: person2,
  [1 + 6 + 9]: 'sixteen',
};

// function addProp(obj, k, v) {
//   const copy = { ...obj };
//   copy[k] = v;
//   return copy;
// }

const addProp = (obj, k, v) => {
  return {
    ...obj,
    [k]: v,
  };
};

const res = addProp(team, 'happy', ':)');
