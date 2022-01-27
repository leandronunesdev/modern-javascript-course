const isPangram = (sentence) => {
  let alphabet = [
    'a',
    'b',
    'c',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'x',
    'y',
    'z',
    'w',
  ];
  for (i = 0; i < alphabet.length; i++) {
    if (sentence.toLowerCase().indexOf(alphabet[i]) === -1) return false;
  }
  return true;
};
