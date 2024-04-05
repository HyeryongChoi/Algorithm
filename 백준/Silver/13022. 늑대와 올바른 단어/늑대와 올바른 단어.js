const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (word) => {
  let i = 0;
  let isValid = true;
  let [w, o, l, f] = [0, 0, 0, 0];

  while (i < word.length) {
    while (word[i] === 'w' && i < word.length) {
      w += 1;
      i += 1;
    }

    while (word[i] === 'o' && i < word.length) {
      o += 1;
      i += 1;
    }

    while (word[i] === 'l' && i < word.length) {
      l += 1;
      i += 1;
    }

    while (word[i] === 'f' && i < word.length) {
      f += 1;
      i += 1;
    }

    if (w !== o || w !== l || w !== f) {
      isValid = false;
      break;
    }
  }

  return isValid;
};

const word = input[0];
console.log(solution(word) ? 1 : 0);