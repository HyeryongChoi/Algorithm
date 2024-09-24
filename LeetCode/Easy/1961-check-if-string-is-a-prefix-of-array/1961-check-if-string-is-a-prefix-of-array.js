/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function(s, words) {
    let index = 0;

    if(words.join('').length < s.length) return false;

    for(let word of words) {
        if(index >= s.length) break;
        if(index + word.length - 1 >= s.length) return false;

        if(word === s.slice(index, index+word.length)) {
            console.log(word, s.slice(index, index+word.length));
            index = index + word.length;
            continue;
        }

        return false;
    }

    return true;
};