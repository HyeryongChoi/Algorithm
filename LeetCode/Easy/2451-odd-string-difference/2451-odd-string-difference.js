/**
 * @param {string[]} words
 * @return {string}
 */
var oddString = function(words) {
    const n = words[0].length;
    const count = {};
    const difference = Array.from({length: words.length}, () => new Array(n-1));

    for(let i = 0; i < words.length; i++) {
        for(let j = 0; j < n-1; j++) {
            difference[i][j] = words[i][j+1].charCodeAt() - words[i][j].charCodeAt();

            if(count[difference[i]]) count[difference[i]] = [count[difference[i]+1, i]];
            else count[difference[i]] = [1, i];
        }
    }
    
    for(let [cnt, index] of Object.values(count)) {
        if(cnt === 1) return words[index];
    }
};