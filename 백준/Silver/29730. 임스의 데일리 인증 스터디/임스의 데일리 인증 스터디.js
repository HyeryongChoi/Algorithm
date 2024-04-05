const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = () => {
  const records = input.slice(1);
  const bojs = [];
  const rest = [];

  records.forEach((record) => {
    if (record.includes('.')) bojs.push(record);
    else rest.push(record);
  });

  rest.sort((a, b) => {
    if (a.length < b.length) return -1; // 길이순
    else if (a.length > b.length) return 1;

    return a < b ? -1 : 1; // 사전순
  });

  bojs.sort((a, b) => {
    // 번호순
    const num1 = +a.split('/')[1];
    const num2 = +b.split('/')[1];

    return num1 - num2;
  });

  console.log([...rest, ...bojs].join('\n'));
};

solution();
