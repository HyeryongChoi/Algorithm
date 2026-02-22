const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath, 'utf8').trim().split('\n');

const solution = () => {
  let word = input[0];
  const croList = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

  // 크로아티아 알파벳을 @로 치환
  for (const cro of croList) {
    // ljes=njak
    // ['', 'es=njak']
    // @es=njak
    word = word.split(cro).join('@');
  }

  console.log(word.length);
};

solution();
