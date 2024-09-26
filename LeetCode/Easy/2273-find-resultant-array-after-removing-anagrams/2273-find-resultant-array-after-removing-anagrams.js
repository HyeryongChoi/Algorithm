/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function(words) {
    const result = [words[0]];

    for(let i = 1; i < words.length; i++) {
        if(!isAnagram(words[i-1], words[i])) result.push(words[i]);
    }

    return result;
};

function isAnagram(word1, word2) {
    if(word1.length !== word2.length) return false;

    const count1ByLetter = word1.split('').reduce((acc, letter) => {
            acc[letter] = (acc[letter] || 0) + 1;
            return acc;
    }, {});

    const count2ByLetter = word2.split('').reduce((acc, letter) => {
        acc[letter] = (acc[letter] || 0) + 1;
        return acc;
    }, {});


    for(let letter in count1ByLetter) {
        if(count1ByLetter[letter] !== count2ByLetter[letter]) return false;
    }

    return true;
}