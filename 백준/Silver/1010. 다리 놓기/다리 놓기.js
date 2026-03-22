const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath, 'utf8').trim().split('\n');

const solution = () => {
  const T = Number(input[0]);
  const answer = [];

  const factorial = (n) => {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
  };

  for (let t = 1; t <= T; t++) {
    const [N, M] = input[t].split(' ').map(Number);

    // M개에서 N개를 뽑는 경우의 수 = mCn = m!/((m-n)!n!)
    answer.push(Math.round(factorial(M) / (factorial(M - N) * factorial(N))));
  }

  console.log(answer.join('\n'));
};

solution();
