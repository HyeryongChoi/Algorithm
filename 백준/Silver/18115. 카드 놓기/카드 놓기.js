const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath, 'utf8').trim().split('\n');

const solution = () => {
  const N = Number(input[0]); // 1~N까지의 숫자
  const skills = input[1].split(' ').map(Number);
  const answer = [];
  let result = Array.from({ length: N }, (_, index) => index + 1);
  let hand = { head: { top: -1, bottom: -1, key: -1 }, tail: { top: -1, bottom: -1, key: -1 } };
  let top = 0;

  const key = result[top++];
  hand[key] = { top: hand.head, bottom: hand.tail, key };
  hand.head.bottom = hand[key];
  hand.tail.top = hand[key];

  for (let i = N - 2; i >= 0; i--) {
    const skill = skills[i];
    const key = result[top++];

    switch (skill) {
      // 1. 제일 위의 카드 1장을 바닥에 내려놓는다
      case 1: {
        hand[key] = { top: hand.head, bottom: hand.head.bottom, key };
        hand.head.bottom.top = hand[key];
        hand.head.bottom = hand[key];
        break;
      }
      // 2. 위에서 2번째 카드를 바닥에 내려놓는다. (카드가 2장 이상인 경우)
      case 2: {
        const handTop = hand.head.bottom;
        hand[key] = { top: handTop, bottom: handTop.bottom, key };
        handTop.bottom.top = hand[key];
        handTop.bottom = hand[key];
        break;
      }
      // 3. 제일 밑에 있는 카드를 바닥에 내려놓는다. (카드가 2장 이상인 경우)
      case 3: {
        hand[key] = { top: hand.tail.top, bottom: hand.tail, key };
        hand.tail.top.bottom = hand[key];
        hand.tail.top = hand[key];
        break;
      }
    }
  }

  let cur = hand.head.bottom;
  while (true) {
    if (cur.key === -1) break;
    answer.push(cur.key);
    cur = cur.bottom;
  }

  console.log(answer.join(' '));
};
solution();
