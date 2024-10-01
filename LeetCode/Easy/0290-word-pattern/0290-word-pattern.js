/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const mapped = {};
    const valueSet = new Set();
    const words = s.split(' ');

    if(pattern.length !== words.length) return false;

    for(let i = 0; i < pattern.length; i++) {
        const letter = pattern[i];

        if(mapped[letter] && mapped[letter] !== words[i]) return false;
        if(!mapped[letter] && valueSet.has(words[i])) return false;
        else if(mapped[letter]) continue;

        mapped[letter] = words[i];
        valueSet.add(words[i]);
    }

    return true;
};