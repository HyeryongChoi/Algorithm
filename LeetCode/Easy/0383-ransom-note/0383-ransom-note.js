/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const count = {};

    magazine.split('').forEach((letter) => {
        count[letter] = (count[letter] || 0) + 1;
    });

    for(let letter of ransomNote) {
        if(!count[letter]) return false;

        count[letter] -= 1;
    }

    return true;
};