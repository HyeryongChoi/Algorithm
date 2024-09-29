/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
    const n = s.length;
    let numbers = Array.from({length: n+1}, (_, index) => index);
    const answer = [];

    for(let i = 0; i < s.length; i++) {
        if(s[i] === 'I') answer.push(numbers.shift());
        else answer.push(numbers.pop());
    }

    answer.push(numbers.pop());

    return answer;
};