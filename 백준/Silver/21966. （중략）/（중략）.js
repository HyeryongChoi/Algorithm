const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let size = +input[0];
let result;

if (size <= 25) result = input[1];
else {
  if (isSameSentence([...input[1].slice(11, -11)])) {
    result = [...input[1].slice(0, 11), '...', ...input[1].slice(-11)].join('');
  } else {
    result = [...input[1].slice(0, 9), '......', ...input[1].slice(-10)].join('');
  }
}

console.log(result);

function isSameSentence(str) {
  const zeomLength = str.filter((value) => value === '.').length;
  return zeomLength === 0 || (zeomLength === 1 && str.at(-1) === '.');
}
