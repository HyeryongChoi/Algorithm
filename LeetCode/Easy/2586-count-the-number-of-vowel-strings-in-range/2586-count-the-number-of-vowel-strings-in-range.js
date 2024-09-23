/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function(words, left, right) {
    const vowels = new Set(['a','e','i','o','u']);
    const rangedWords = words.slice(left, right+1);

    return rangedWords.filter(word => {
        if(vowels.has(word.at(0)) && vowels.has(word.at(-1))) return true;
        return false;
    }).length;
};