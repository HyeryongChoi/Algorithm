/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    const result = [];
    const counts = new Array(words.length);

    words.forEach((word, index) => {
        counts[index] = word
        .split('')
        .reduce((acc, cur, i)=>{
            acc[cur] = (acc[cur] || 0) + 1;

            return acc;
        }, {});
    });

    for(let [letter, count ] of Object.entries(counts[0])) {
        let minCount = count;

        for(let i = 1; i < counts.length; i++) {
            if(!counts[i][letter]) {
                minCount = 0;
                break;
            }

            minCount = Math.min(minCount, counts[i][letter]);
        }

        if(minCount > 0) {
            const arr = new Array(minCount).fill(letter);
            
            result.push(...arr);
        }
    }

    return result;
};