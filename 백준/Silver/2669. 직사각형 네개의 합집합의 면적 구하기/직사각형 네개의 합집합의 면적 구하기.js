const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath, 'utf8').trim().split('\n');

/**
 * 수학 좌표를 행렬 좌표로 변경(y축 뒤집기)
 * x' = x - minX
 * y' = maxY - y
 * 사각형 완탐으로 너비 구하기
 */
const solution = () => {
  const raw = input.map((line) => line.split(' ').map(Number));
  const minX = raw.reduce((acc, [x1, _, x2, __]) => Math.min(acc, x1, x2), Infinity);
  const maxY = raw.reduce((acc, [_, y1, __, y2]) => Math.max(acc, y1, y2), 0);
  const posList = raw.map(([x1, y1, x2, y2]) => [x1 - minX, maxY - y1, x2 - minX, maxY - y2]);
  const N = 100;
  const visited = Array.from({ length: N }, () => new Array(N).fill(false));
  let answer = 0;

  const getArea = (start, end, visited) => {
    let area = 0;

    for (let y = start[0]; y < end[0]; y++) {
      for (let x = start[1]; x < end[1]; x++) {
        if (visited[y][x]) continue;

        visited[y][x] = true;
        area++;
      }
    }

    return area;
  };

  for (const [x1, y1, x2, y2] of posList) {
    const start = [Math.min(y1, y2), Math.min(x1, x2)];
    const end = [Math.max(y1, y2), Math.max(x1, x2)];
    const area = getArea(start, end, visited);

    answer += area;
  }

  console.log(answer);
};

solution();
