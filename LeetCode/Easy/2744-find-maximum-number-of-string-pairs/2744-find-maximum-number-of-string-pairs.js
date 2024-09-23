/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function(words) {
    let count = 0;
    const visited = new Array(words.length).fill(false);

    for(let i = 0; i < words.length; i++) {
        for(let j = 0; j < words.length; j++) {
            if(i === j || visited[i] || visited[j]) continue;
            if(words[i] === words[j].split('').reverse().join('')) {
                count += 1;
                visited[i] = true;
                visited[j] = true;
            }
        }
    }

    return count;
};