const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().split('\n');

const temp = input[0].split(' ');
let n = +temp[0];
let m = +temp[1];

let result = Array.from({ length: n }, (_, index) => index + 1);

let arr = [];
for (let i = 1; i <= m; i++) {
  arr.push(input[i].split(' ').map((item) => +item));
}

for (let i = 0; i < arr.length; i++) {
  const idx1 = arr[i][0] - 1;
  const idx2 = arr[i][1] - 1;

  let temp1 = result.slice(idx1, idx2 + 1).reverse();
  result.splice(idx1, idx2 - idx1 + 1, ...temp1);
}

console.log(result.join(' '));
