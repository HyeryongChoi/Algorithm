/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    return words.filter((word, index) => {
        for(let i = 0; i < words.length; i++) {
            if(i === index) continue;
            if(words[i].includes(word)) return true;
        }

        return false;
    });
};