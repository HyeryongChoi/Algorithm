const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = () => {
  const records = [];
  const score = [0, 0]; // 레드, 블루팀 점수
  const bestRank = [8, 8];
  const scoreTable = [10, 8, 6, 5, 4, 3, 2, 1];
  let winner;

  for (let i = 0; i < 8; i++) {
    const [recordStr, team] = input[i].split(' ');
    const recordArr = recordStr.split(':').map((el) => +el);
    const record = recordArr[0] * 60 * 1000 + recordArr[1] * 1000 + recordArr[2];

    records.push([record, team]);
  }

  records.sort((a, b) => a[0] - b[0]);

  records.forEach((record, rank) => {
    if (record[1] === 'R') {
      score[0] += scoreTable[rank];
      bestRank[0] = Math.min(bestRank[0], rank);
    } else if (record[1] === 'B') {
      score[1] += scoreTable[rank];
      bestRank[1] = Math.min(bestRank[1], rank);
    }
  });

  if (score[0] > score[1]) winner = 'Red';
  else if (score[0] < score[1]) winner = 'Blue';
  else {
    winner = bestRank[0] < bestRank[1] ? 'Red' : 'Blue';
  }

  console.log(winner);
};

solution();
