/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    const charObj = {};

    chars.split('').forEach(char => {
        charObj[char] = (charObj[char] || 0) + 1;
    });

    return words.filter(word => {
        const copiedChars = {...charObj};

        for(let char of word) {
            if(!copiedChars[char]) return false;

            copiedChars[char] -= 1;
        }

        return true;
    }).join('').length;
};