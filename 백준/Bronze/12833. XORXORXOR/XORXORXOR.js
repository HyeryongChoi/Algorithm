const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath, 'utf8').trim().split('\n');

const solution = () => {
  const [a, b, c] = input[0].split(' ').map(Number);
  console.log(c % 2 === 0 ? a : a ^ b);
};

solution();
