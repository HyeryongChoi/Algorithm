const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = () => {
  const [n, m] = input[0].split(' ').map(Number);
  const answer = [];

  const search = (permutation) => {
    if (permutation.length === m) {
      answer.push(permutation.join(' '));
      return;
    }

    for (let i = 1; i <= n; i++) {
      if (permutation.includes(i)) continue;

      search([...permutation, i]);
    }
  };

  search([]);

  console.log(answer.join('\n'));
};

solution();
