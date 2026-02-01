const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath, 'utf8').trim().split('\n');

const solution = () => {
  // 1. front 중요도 확인
  // 2. 나머지 문서들 중 front보다 중요도가 높은 문서가 있다면 rear로 이동시킴, 그렇지 않다면 pop
  const TEST_CASE = Number(input[0]);

  for (let t = 1; t <= TEST_CASE * 2; t = t + 2) {
    const [N, TARGET_INDEX] = input[t].split(' ').map(Number);
    const documents = input[t + 1]
      .split(' ')
      .map(Number)
      .map((val, index) => [val, index]);
    const sorted = documents.map(([val, _]) => val).sort((a, b) => a - b);
    let [front, rear] = [0, N - 1];
    const printed = [];

    while (front <= rear) {
      if (documents[front][0] === sorted.at(-1)) {
        const cur = sorted.pop();
        printed.push(cur);
        if (TARGET_INDEX === documents[front][1]) break;
      } else {
        documents.push(documents[front]);
        rear++;
      }
      front++;
    }

    console.log(printed.length);
  }
};

solution();
