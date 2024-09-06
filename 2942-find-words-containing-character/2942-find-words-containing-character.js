/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    // define answer variable
    const answer = [];

    // iterate over words
    words.forEach((word, index) => {
        // check condition word.includes(x)
        if(word.includes(x)) {
            // push index into answer
            answer.push(index);
        }
    });

    return answer;
};