/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    // sort words array
    const sortedWords = [...words].sort((a,b) => {
        let minSize = Math.min(a.length, b.length);

        for(let i = 0; i < minSize; i++) {
            const order1 = order.indexOf(a[i]);
            const order2 = order.indexOf(b[i]);

            if(order1 === order2) continue;

            return order1 - order2;
        }

        return a.length - b.length;
    });

    // compare it with original words array to determine if the order is correct
    for(let i = 0; i < words.length; i++) {
        if(sortedWords[i] !== words[i]) return false;
    }

    // if the given words are sorted lexicographically in thie alien language, retrun true
    return true;
};