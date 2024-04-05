const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input[0];
const table = [];

for (let i = 1; i <= n; i++) {
  table.push(input[i].split(''));
}

const pos = { head: [0, 0], heart: [0, 0] };

let isFindHead = false;
for (let i = 0; i < n; i++) {
  if (isFindHead) break;
  for (let j = 0; j < n; j++) {
    if (table[i][j] === '*') {
      pos.head[0] = i;
      pos.head[1] = j;
      isFindHead = true;
      break;
    }
  }
}

pos.heart = [pos.head[0] + 1, pos.head[1]];

let leftArmCnt = 0;
let rightArmCnt = 0;
let heori = 0;
let leftLeg = 0;
let rightLeg = 0;

// 왼팔
for (let i = 0; i < pos.heart[1]; i++) {
  if (table[pos.heart[0]][i] === '*') leftArmCnt += 1;
}

// 오른팔
for (let i = pos.heart[1] + 1; i < n; i++) {
  if (table[pos.heart[0]][i] === '*') rightArmCnt += 1;
}

// 허리
for (let i = pos.heart[0] + 1; i < n; i++) {
  if (table[i][pos.heart[1]] === '*') heori += 1;
}

// 왼다리
for (let i = pos.heart[0] + heori + 1; i < n; i++) {
  if (table[i][pos.heart[1] - 1] === '*') leftLeg += 1;
}

// 오른다리
for (let i = pos.heart[0] + heori + 1; i < n; i++) {
  if (table[i][pos.heart[1] + 1] === '*') rightLeg += 1;
}

console.log(pos.heart[0] + 1, pos.heart[1] + 1);
console.log(leftArmCnt, rightArmCnt, heori, leftLeg, rightLeg);