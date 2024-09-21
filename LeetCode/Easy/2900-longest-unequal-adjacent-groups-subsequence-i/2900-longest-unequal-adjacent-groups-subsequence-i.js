/**
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
var getLongestSubsequence = function(words, groups) {
    const n = groups.length;
    const answer = [];

    for(let i = 0; i < n; i++) {
        if(i === 0 || groups[i] !== groups[i-1]) {
            answer.push(words[i]);
        }
    }

    return answer;
};