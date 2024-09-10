/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function(licensePlate, words) {
    // remove non-alphabet characters by using reguler expressions and replace method
    const newLicensePlate = licensePlate.replace(/[^a-zA-Z]/g,'').toLowerCase();

    // count the number of each alphabet
    const countTable = {};

    newLicensePlate.split('').forEach((alpha) => {
        if(countTable[alpha]) countTable[alpha] += 1;
        else countTable[alpha] = 1;
    });

    // eterate words for finding completing words
    const candidates = words.filter(word => {
        let isCompletingWord = true;
        // define an object to store alphabet count
        const countTable2 = {};

        // count the number of each alphabet
        word.toLowerCase().split('').forEach((alpha) =>{
            if(countTable2[alpha]) countTable2[alpha] += 1;
            else countTable2[alpha] = 1;
        });

        // check if this word is completing word
        for(let [alpha, count] of Object.entries(countTable)) {
            if(!countTable2[alpha] || countTable2[alpha] < count) {
                isCompletingWord = false;
                break;
            }
        }

        return isCompletingWord;
    });

    // sort by string length in ascending order
    const answer = candidates.sort((a,b) => {
        return a.length - b.length;
    })[0];

    return answer;
};