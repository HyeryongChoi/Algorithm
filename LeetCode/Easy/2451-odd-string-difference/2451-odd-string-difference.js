/**
 * @param {string[]} words
 * @return {string}
 */
var oddString = function(words) {
    const n = words[0].length;
    const count = {};

    for(let i = 0; i < words.length; i++) {
        const difference = [];
        for(let j = 0; j < n-1; j++) {
            difference.push(words[i][j+1].charCodeAt() - words[i][j].charCodeAt());

            const key = difference.join('');

            if(count[key]) count[key] = [count[key]+1, i];
            else count[key] = [1, i];
        }
    }

    for(let [cnt, index] of Object.values(count)) {
        if(cnt === 1) return words[index];
    }
};