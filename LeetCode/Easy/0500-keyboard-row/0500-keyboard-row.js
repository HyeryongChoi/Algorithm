/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    // define variable to store American keyword by using Set data structure
    const americanKeyboard = [
        new Set('qwertyuiop'.split('')),
        new Set('asdfghjkl'.split('')),
        new Set('zxcvbnm'.split('')),
    ];


    // define variable to store answer
    const answer = [];

    // iterate over words array
    words.forEach(word => {
        for(let i = 0; i < americanKeyboard.length; i++) {
            if(word.toLowerCase().split('').every(data => americanKeyboard[i].has(data))) {
                answer.push(word);
                break;
            }
        }
    });

    return answer;
};