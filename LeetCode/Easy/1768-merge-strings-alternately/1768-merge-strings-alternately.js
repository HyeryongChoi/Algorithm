/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let newWord = '';
    let [index1, index2] = [0, 0];

    while(index1 < word1.length || index2 < word2.length) {
        if(index1 < word1.length) {
            newWord += word1[index1];
            index1 += 1;
        }

        if(index2 < word2.length) {
            newWord += word2[index2];
            index2 += 1;
        }
    }

    return newWord;
};