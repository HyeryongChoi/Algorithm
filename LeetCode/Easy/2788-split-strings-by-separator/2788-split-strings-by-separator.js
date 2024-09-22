/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function(words, separator) {
    return words.reduce((acc, word) => {
        return [...acc, ...word.split(separator)];
    }, [])
    .filter(word => word.length > 0);
};