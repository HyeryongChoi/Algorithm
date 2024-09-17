/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function(widths, s) {
    const MAX_SIZE = 100;
    let count = 0;
    let result = [1, 0];

    s.split('').forEach((alpha) => {
        const width = widths[alpha.charCodeAt() - 'a'.charCodeAt()];

        count += width;

        if(count > MAX_SIZE) {
            result[0] += 1;
            count = width;
        } else if(count === MAX_SIZE) {
            result[0] += 1;
            count = 0;
        }
    });

    result[1] = count;

    if(count === 0) {
        result = [result[0]-1, MAX_SIZE];
    }

    return result;
};