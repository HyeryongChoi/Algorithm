/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    return s.split(' ').filter(letter => letter.length>0).at(-1).length;
};