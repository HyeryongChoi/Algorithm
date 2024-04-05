let [repeat, ...input] = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
// repeat: '5'  input: ['1 1', ''2 3', '3 4', '9 8', '5 2']

repeat = Number(repeat);
// repeat: 5

for (let i = 0; i < repeat; i++) {
  const [A, B] = input[i].split(' ').map(Number);
  // 이 시점에서 A, B에 정수가 저장됩니다

  console.log(A + B); // i번째 줄의 연산 결과를 출력합니다
}
