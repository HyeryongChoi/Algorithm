const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath, 'utf8').trim().split('\n');

const solution = () => {
  const [N, M] = input[0].split(' ').map(Number); // 걸그룹수, 맞혀야할문제수
  let index = 1;
  const groups = {};
  const answer = [];

  for (let t = 1; t <= N; t++) {
    const group = input[index++];
    const num = Number(input[index++]);
    const members = [];

    for (let i = 0; i < num; i++) {
      members.push(input[index++]);
    }

    // 이름 사전순 정렬
    members.sort();

    groups[group] = {};
    groups[group].num = num;
    groups[group].members = members;
  }

  for (let q = 0; q < M; q++) {
    const name = input[index++]; // 0: 팀 이름, 1: 멤버이름
    const type = Number(input[index++]);

    if (type === 0) {
      answer.push(groups[name].members.join('\n'));
      continue;
    }

    for (let group of Object.keys(groups)) {
      const members = groups[group].members;
      if (members.includes(name)) {
        answer.push(group);
      }
    }
  }

  console.log(answer.join('\n'));
};

solution();
