/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let count = 0;

    words.forEach(word => {
        if(word.split('').every(char => allowed.includes(char))) count++;
    });

    return count;
};