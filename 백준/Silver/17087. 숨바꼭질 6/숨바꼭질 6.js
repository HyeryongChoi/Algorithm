const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = () => {
  const [n, now] = input[0].split(' ').map(Number);
  const brothers = input[1]
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);

  const answer = brothers.reduce((gcd, cur, i, origin) => {
    if (i === 0) return gcd;
    return getGCD(gcd, cur - origin[i - 1]);
  }, Math.abs(brothers[0] - now));

  // 모든 동생을 찾을 수 있는 D의 값 중 최댓값?
  console.log(answer);
};

const getGCD = (a, b) => {
  if (b === 0) return a;
  return a > b ? getGCD(b, a % b) : getGCD(a, b % a);
};

solution();
