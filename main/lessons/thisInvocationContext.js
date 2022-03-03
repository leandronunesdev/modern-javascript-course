function sayHi() {
  console.log('Hi');
  console.log(this);
}

const greet = function () {
  console.log(this);
};

const person = {
  first: 'Cherilyn',
  last: 'Sarkisian',
  nickName: 'Cher',
  fullName() {
    const { first, last, nickName } = this;
    return `${first} ${last} AKA ${nickName}`;
  },
  printBio() {
    console.log(this);
    const fullName = this.fullName();
    console.log(`${fullName} is a singer`);
  },
  laugh: () => {
    console.log(this);
    console.log(`${this.nickName} says HAHA`);
  },
};

const printBio = person.printBio;
