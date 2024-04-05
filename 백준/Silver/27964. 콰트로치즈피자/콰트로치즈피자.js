const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

/////////
const n = +input[0];
const arr = input[1].split(' ');
const cheeses = new Set([]);
const CHEESE = 'Cheese';

arr.forEach((value) => {
  const endStr = [...value].splice(value.length - 6).join('');

  if (endStr === CHEESE) cheeses.add(value);
});

cheeses.size >= 4 ? console.log('yummy') : console.log('sad');
