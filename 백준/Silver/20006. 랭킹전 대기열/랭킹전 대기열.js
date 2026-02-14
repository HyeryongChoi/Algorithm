const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath, 'utf8').trim().split('\n');

// 플레이어가 입장 신청 > 매칭 가능한 방이 없다면 > 새로운 방 생성
// 해당 방에는 입장한 플레이어 레벨 기준 -10 ~ +10까지 입장 가능
// 입장 가능한 방이 있다면 > 입장시킨 후 방의 정원이 모두 찰 때까지 대기시킴
// 입장 가능한 방이 여러 개라면 먼저 생성된 방에 입장
// 방의 정원이 모두 차면 게임을 시작시킨다
const solution = () => {
  const [playerNum, roomLimit] = input[0].split(' ').map(Number);
  const players = Array.from({ length: playerNum }, (_, index) => {
    return input[index + 1]
      .split(' ')
      .reduce((acc, val, index) => (index % 2 === 0 ? { ...acc, level: Number(val) } : { ...acc, nickname: val }), {}); // 레벨과 닉네임
  });
  const rooms = []; // min, max, members
  const answers = [];

  const canEnter = (room, player) => {
    if (room.members.length >= roomLimit) return false;
    if (player.level < room.min) return false;
    if (player.level > room.max) return false;
    return true;
  };

  for (const player of players) {
    const roomIndex = rooms.findIndex((room) => canEnter(room, player));

    if (roomIndex < 0) {
      const min = player.level - 10;
      const max = player.level + 10;
      rooms.push({
        min,
        max,
        members: [player],
      });

      continue;
    }

    rooms[roomIndex].members.push(player);
  }

  for (const room of rooms) {
    const message = room.members.length >= roomLimit ? 'Started!' : 'Waiting!';

    room.members.sort((a, b) => a.nickname.localeCompare(b.nickname));
    answers.push(message);
    room.members.forEach((member) => answers.push(`${member.level} ${member.nickname}`));
  }

  console.log(answers.join('\n'));
};

solution();
