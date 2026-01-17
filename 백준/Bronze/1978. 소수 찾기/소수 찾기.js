const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath, 'utf8').trim().split('\n');

const solution = () => {
  const numbers = input[1].split(' ').map(Number);

  const isPrime = (number) => {
    if (number <= 1) return false;

    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }

    return true;
  };

  console.log(numbers.filter(isPrime).length);
};

solution();
