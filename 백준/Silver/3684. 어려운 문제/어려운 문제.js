const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath, 'utf8').trim().split('\n');

const solution = () => {
  const T = Number(input[0]);
  const X = input.slice(1).map(Number);
  const M = 10001;
  const arr = Array(2 * T).fill(0);

  arr[0] = X[0];

  /**
   * X[0] = arr[0] = 17
   * X[1] = arr[2] = 822
   *      = ( a * arr[1] + b ) % M
   *      = ( a * ( a * 17 + b ) % M + b ) % M
   * X[2] = arr[4] = 3014
   *      = ( a * arr[3] + b ) % M
   *      = ( a * ( a * 822 + b) % M + b ) % M
   * M = 10001
   *
   * arr[1] = ( a * arr[0] + b ) % M = ( a * 17 + b ) % M
   * arr[2] = ( a * arr[1] + b ) % M = 822
   * arr[3] = ( a * arr[2] + b ) % M = ( a * 822 + b) % M
   * arr[4] = ( a * arr[3] + b ) % M = 3014
   */

  if (T === 1) {
    console.log(X[0]);
    return;
  }

  const pairs = [];
  for (let a = 0; a <= 10000; a++) {
    for (let b = 0; b <= 10000; b++) {
      if ((((a * (a * X[0] + b)) % M) + b) % M === X[1]) {
        pairs.push([a, b]);
      }
    }
  }

  for (const [a, b] of pairs) {
    const answer = [];
    let check = true;

    for (let i = 1; i < 2 * T; i++) {
      arr[i] = (a * arr[i - 1] + b) % 10001;

      if (i % 2 !== 0) answer.push(arr[i]);
      if (i % 2 === 0 && X[i / 2] !== arr[i]) {
        check = false;
        break;
      }
    }

    if (check) {
      console.log(answer.join('\n'));
      return;
    }
  }
};

solution();