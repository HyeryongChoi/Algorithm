const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath, 'utf8').trim().split('\n');

const solution = () => {
  const [N, coupon] = input[0].split(' ');
  const price = BigInt(input[1]);
  let answer = -1;

  const newCoupon = BigInt(coupon.replaceAll('?', '9'));
  if (newCoupon >= price) answer = newCoupon;

  console.log(answer.toString());
};

solution();
