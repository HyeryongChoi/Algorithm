/*
  틈새 = [9, 6, 5, 8, 3, 7, 1]
  5 뒤의 틈새는 5보다 큰 새가 지나갈 수 없다
  9, 6, 5, 5, 3, 7, 1
  3 뒤의 틈새는 3보다 큰 새가 지나갈 수 없다
  9, 6, 5, 5, 3, 3, 1
  내림차순 정렬된 수열과 결과가 같으므로, 이분탐색 가능

  새가 도달할 수 있는 장애물 중 가장 먼 지점 찾기
  새 크기 <= 틈새, start = mid + 1
  새 크기 > 틈새, end = mid - 1
 */

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath, 'utf8').trim().split('\n');

const solution = () => {
  const [, tops, bottoms, , birdSizes] = input.map((line) => line.split(' ').map(Number));
  const scores = Array.from({ length: birdSizes.length }).fill(0);
  const gaps = Array.from({ length: tops.length }, (_, index) => tops[index] - bottoms[index]);

  // gaps[i] = 0~i번째 요소를 지나갈 수 있는 새의 최대 크기
  for (let i = 1; i < gaps.length; i++) {
    gaps[i] = Math.min(gaps[i - 1], gaps[i]);
  }

  for (let i = 0; i < birdSizes.length; i++) {
    let [start, mid, end] = [0, 0, gaps.length - 1];

    while (start <= end) {
      mid = Math.floor((start + end) / 2);

      // 새가 지나갈 수 있는지 체크
      if (birdSizes[i] <= gaps[mid]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }

      scores[i] = end + 1;
    }
  }

  console.log(scores.join('\n'));
};

solution();
