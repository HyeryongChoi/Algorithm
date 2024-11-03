const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = () => {
  const testCase = Number(input[0]);

  for (let t = 1; t <= testCase; t++) {
    const [begin, end] = input[t].split(' ').map(Number);
    const distance = end - begin;

    let cnt = 0; // 공간장치 이동 횟수
    let d = 0; // 이동거리
    let loop = 0; // 반복 횟수

    while (d < distance) {
      cnt += 1;

      if (cnt % 2 !== 0) loop += 1;

      d += loop;
    }

    console.log(cnt);
  }
};

solution();
