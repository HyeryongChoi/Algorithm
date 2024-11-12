/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const brackets = s.split('');
    const test = [];

    for(let bracket of brackets) {
        if (
            (test.at(-1) === '(' && bracket === ')') ||
            (test.at(-1) === '{' && bracket === '}') ||
            (test.at(-1) === '[' && bracket === ']') 
        ) {
            test.pop();
        }
        else {
            test.push(bracket);
        }
    }

    return test.length === 0;
};