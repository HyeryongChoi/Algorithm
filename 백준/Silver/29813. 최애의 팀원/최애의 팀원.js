const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input[0];
let arr = [];

for (let i = 1; i < input.length; i++) arr.push(input[i]);

while (arr.length > 1) {
  const [a, count] = arr.shift().split(' ');

  for (let i = 0; i < +count - 1; i++) {
    const temp = arr.shift();

    arr.push(temp);
  }

  const naga = arr.shift();
}

const result = arr.shift().split(' ')[0];

console.log(result);