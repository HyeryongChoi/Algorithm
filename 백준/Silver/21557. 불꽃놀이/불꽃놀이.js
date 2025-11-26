const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = require('fs').readFileSync(filePath, 'utf8').trim().split('\n');

const solution = () => {
  const heights = input[1].split(' ').map(Number);

  let [start, end] = [0, heights.length - 1];
  let [right, left] = [start + 1, end - 1]; // start의 오른쪽, end의 왼쪽
  let count = heights.length;

  while (count > 2) {
    count--;

    if (right === left) {
      heights[right] = 0;
      heights[start]--;
      heights[end]--;
    } else if (heights[start] >= heights[end]) {
      // start 선택
      heights[start]--;
      heights[right++] = 0;
      heights[right]--;
    } else {
      // end 선택
      heights[end]--;
      heights[left--] = 0;
      heights[left]--;
    }
  }

  console.log(Math.max(...heights));
};

solution();