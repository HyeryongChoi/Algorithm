const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath, 'utf8').trim().split('\n');

const solution = () => {
  const COUNT = Number(input[0]);
  const queries = [];
  const stack = [];
  let answer = [];

  for (let q = 1; q <= COUNT; q++) {
    const [query, param] = input[q].split(' ').map(Number);

    queries.push([query, param, true]);

    if (query === 1) stack.push(param);
    if (query === 2 && stack.length > 0) queries[q - 1][1] = stack.pop();
    if (query === 3) {
      let count = 0;

      for (let i = queries.length - 1; i >= 0; i--) {
        const [q, p, valid] = queries[i];
        if (!valid) continue;
        if (q === 1) stack.pop();
        if (q === 2) stack.push(p);

        if (q === 1 || q === 2) {
          count += 1;
          queries[i][2] = false;
        }

        if (count === param) break;
      }
    }
    if (query === 4) answer.push(stack.length);
    if (query === 5) answer.push(stack.length > 0 ? stack.at(-1) : -1);
  }

  console.log(answer.join('\n'));
};

solution();
