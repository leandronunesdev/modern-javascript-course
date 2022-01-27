//MY SOLUTION I

const isValidPasswordOne = (password, username) => {
  if (password.length >= 8) {
    if (password.includes(' ')) {
      console.log("Password can't have space!");
      return false;
    } else {
      if (password.includes(username)) {
        console.log("Password can't contain the username");
        return false;
      } else {
        console.log('Valid password');
        return true;
      }
    }
  } else {
    console.log('Password needs at least 8 characters!');
    return false;
  }
};

//MY SOLUTION II

const isValidPasswordTwo = (password, username) => {
  if (
    password.length >= 8 &&
    password.indexOf(' ') === -1 &&
    password.indexOf(username) === -1
  ) {
    console.log('Valid password');
    return true;
  } else {
    console.log('Invalid password');
    return false;
  }
};

//TEACHER`S SOLUTIONS
const isValidPassword = (password, username) => {
  if (password.length < 8) {
    return false;
  }
  if (password.indexOf(' ') !== -1) {
    return false;
  }
  if (password.indexOf(username) !== -1) {
    return false;
  }
  return true;
};

const isValidPassword2 = (password, username) => {
  if (
    password.length < 8 ||
    password.indexOf(' ') !== -1 ||
    password.indexOf(username) !== -1
  ) {
    return false;
  }
  return true;
};

const isValidPassword3 = (password, username) => {
  const tooShort = password.length < 8;
  const hasSpace = password.indexOf(' ') !== -1;
  const tooSimilar = password.indexOf(username) !== -1;

  if (tooShort || hasSpace || tooSimilar) return false;
  return true;
};

const isValidPassword4 = (password, username) => {
  const tooShort = password.length < 8;
  const hasSpace = password.indexOf(' ') !== -1;
  const tooSimilar = password.indexOf(username) !== -1;

  if (!tooShort && !hasSpace && !tooSimilar) return true;
  return false;
};

const isValidPassword5 = (password, username) => {
  const tooShort = password.length < 8;
  const hasSpace = password.indexOf(' ') !== -1;
  const tooSimilar = password.indexOf(username) !== -1;

  return !tooShort && !hasSpace && !tooSimilar;
};
