const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath, 'utf8').trim().split('\n');

const solution = () => {
  const [N, M, B] = input[0].split(' ').map(Number);
  const board = Array.from({ length: N }, (_, i) => input[i + 1].split(' ').map(Number));
  let maxHeight = 0;
  let minTime = Infinity;

  const heightCount = {};
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      const height = board[i][j];

      if (height in heightCount) {
        heightCount[height] += 1;
      } else {
        heightCount[height] = 1;
      }
    }
  }

  for (let targetHeight = 0; targetHeight <= 256; targetHeight++) {
    let inventory = B;
    let time = 0;
    let isPossible = true;

    for (let [curKey, curCount] of Object.entries(heightCount)) {
      const curHeight = Number(curKey);

      if (curHeight === targetHeight) continue;

      // 블록 제거 2초
      if (curHeight > targetHeight) {
        const diff = curHeight - targetHeight;
        inventory += curCount * diff;
        time += curCount * diff * 2;
      }

      // 블록 쌓기 1초
      if (curHeight < targetHeight) {
        const diff = targetHeight - curHeight;
        inventory -= curCount * diff;
        time += curCount * diff;
      }
    }

    // 쌓기 가능 여부는 마지막에 판단
    if (inventory < 0) continue;

    if (time < minTime) {
      minTime = time;
      maxHeight = targetHeight;
    } else if (time === minTime) {
      maxHeight = Math.max(maxHeight, targetHeight);
    }
  }

  console.log(`${minTime} ${maxHeight}`);
};

solution();
