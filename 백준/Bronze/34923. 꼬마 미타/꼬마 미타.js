/**
 * 1분 -> 6도
 * 12시간 = 720분(원형)
 * 시간 -> 분 단위로 바꿈
 * diff = | A - B |
 * minDiff = min(diff, 720 - diff)
 */
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath, 'utf8').trim().split('\n');
const toMinutes = (time) => {
  const [hh, mm] = time.split(':').map(Number);
  return hh * 60 + mm;
};

const solution = () => {
  const me = toMinutes(input[0]);
  const other = toMinutes(input[1]);
  const diff = Math.abs(me - other);
  const answer = Math.min(diff, 720 - diff) * 6;

  console.log(answer);
};

solution();
