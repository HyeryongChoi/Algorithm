/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    // change paragraph to lowercase and convert it into an array
    const newParagraph = paragraph.toLowerCase().replace(/[^a-z ]/g,'').split(' ');
    const count = {};
    let answer = ['', 0];

    // count word
    newParagraph.forEach((word) => {
        if(banned.includes(word)) return;

        if(count[word]) count[word] += 1;
        else count[word] = 1;

        // update answer
        if (count[word] > answer[1]) answer = [word, count[word]];
    });

    return answer[0];
};