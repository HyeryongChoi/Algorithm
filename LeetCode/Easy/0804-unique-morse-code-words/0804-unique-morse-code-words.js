/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const result = new Set();
    const morseCodes = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];

    words.forEach((word) => {
        const morse = word.split('').reduce((acc, letter)=> {
            const index = letter.charCodeAt() - 'a'.charCodeAt();
            return acc + morseCodes[index];
        }, '');

        result.add(morse);
    });

    return result.size;
};