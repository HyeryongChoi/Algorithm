const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath, 'utf8').trim().split('\n');

const solution = () => {
  const [N, K] = input[0].split(' ').map(Number);
  const times = input[1].split(' ').map(Number);
  const claps = [];

  claps.push(times[0] + K);

  for (let t = 1; t < N; t++) {
    const cur = { start: times[t], end: times[t] + K };

    if (claps.at(-1) < cur.start) {
      claps.push(cur.end);
    }
  }

  console.log(claps.length);
};

solution();