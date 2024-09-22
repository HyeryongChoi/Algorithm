/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {
    if (words.length !== s.length) return false;

    const word = words.reduce((acc, word)=>{
        return acc + word[0];
    }, '');

    return word === s;
};