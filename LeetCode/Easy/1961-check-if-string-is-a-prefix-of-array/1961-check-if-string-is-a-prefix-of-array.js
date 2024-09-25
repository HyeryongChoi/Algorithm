/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function(s, words) {
    let concatenated = '';

    if(words.join('').length < s.length) return false;

    for(let word of words) {
        concatenated += word;

        if(s.slice(0, concatenated.length) !== concatenated) return false;
        if(s.length === concatenated.length) break;
    }

    return true;
};