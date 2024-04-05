const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = () => {
  const [n, m] = input[0].split(' ').map((el) => +el); // 파일개수n, OS에서 인식하는 확장자 개수m
  const files = [];
  const extensions = new Set([]);

  for (let i = 1; i < n + 1; i++) {
    const file = input[i].split('.'); // FILENAME.EXTENSION
    files.push(file);
  }

  for (let i = n + 1; i < n + 1 + m; i++) {
    const extension = input[i];
    extensions.add(extension);
  }

  files.sort((a, b) => {
    if (a[0] === b[0]) {
      // 파일명이 같다면
      if (extensions.has(a[1]) && !extensions.has(b[1])) return -1; // a[1]을 먼저 배치
      else if (!extensions.has(a[1]) && extensions.has(b[1])) return 1; // b[1]을 먼저 배치
      else {
        return a[1].localeCompare(b[1]);
      }
    } else {
      return a[0].localeCompare(b[0]);
    }
  });

  return files.map((file) => file.join('.')).join('\n');
};

console.log(solution());