/**
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function(words) {
    // Declare value to store the number of pair
    let count = 0;

    // Iterate over an array words to calculate the number of pairs that are similar
    for(let i = 0; i < words.length; i++) {
        for(let j = i+1; j < words.length; j++) {
            // Extract uniq letters from each word by using Set
            const left = [...new Set(words[i])].sort().join('');
            const right = [...new Set(words[j])].sort().join('');

            if(left === right) count += 1;
        }
    }

    return count;
};