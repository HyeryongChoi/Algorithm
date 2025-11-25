const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = require('fs').readFileSync(filePath, 'utf8').trim().split('\n');

const solution = () => {
  const n = Number(input[0]);
  const heights = input[1].split(' ').map(Number);
  let answer = Infinity;

  const shoot = (index, heights, count) => {
    // index번째 폭죽 터뜨리기
    heights[index] = 0;

    // index번째 양 옆 폭죽 더미 높이 -1
    for (let j = index - 1; j >= 0; j--) {
      if (heights[j] > 0) {
        heights[j] -= 1;
        break;
      }
    }

    for (let j = index + 1; j < heights.length; j++) {
      if (heights[j] > 0) {
        heights[j] -= 1;
        break;
      }
    }

    // 폭죽더미가 2개 남은 경우 종료
    if (count - 1 === 2) {
      answer = Math.min(answer, Math.max(...heights));
      return;
    }

    // 다음 폭죽 더미 선택
    for (let i = 1; i <= heights.length - 2; i++) {
      if (heights[i] > 0) shoot(i, [...heights], count - 1);
    }
  };

  for (let i = 1; i <= heights.length - 2; i++) {
    // i번째 폭죽더미 선택
    shoot(i, [...heights], n);
  }

  console.log(answer);
};

solution();