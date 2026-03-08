const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath, 'utf8').trim().split('\n');

/**
 * 스택 2개 left, right
 * 커서 왼쪽 문자는 left,
 * 커서 오른쪽 문자는 right
 */
const solution = () => {
  const left = input[0].split('');
  const right = [];

  const N = Number(input[1]);

  for (let i = 2; i < N + 2; i++) {
    const [command, val] = input[i].split(' ');

    // 커서를 왼쪽으로 한 칸
    if (command === 'L') {
      if (left.length > 0) right.push(left.pop());
    }

    // 커서를 오른쪽으로 한 칸
    if (command === 'D') {
      if (right.length > 0) left.push(right.pop());
    }

    // 커서 왼쪽에 있는 문자 삭제
    if (command === 'B') {
      if (left.length > 0) left.pop();
    }

    // 커서 왼쪽에 문자 추가
    if (command === 'P') {
      left.push(val);
    }
  }

  console.log(left.join('') + right.reverse().join(''));
};

solution();
