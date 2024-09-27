/**
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */
var checkDistances = function(s, distance) {
    // declare sSet to store instinct letters of s
    const sSet = new Set(s.split(''));

    // iterate over sSet to figure out whethere s is a well-spaced string or not
    for(let letter of sSet) {
        // find index of letter
        const index = letter.charCodeAt() - 'a'.charCodeAt();
        const diff = getDiff(letter, s);

        if(distance[index] !== diff) return false;
    }

    return true;
};

// declare function to calculate distance between the two letters
function getDiff(letter, s) {
    const pos = [];

    s.split('').forEach((cur, index) => {
        if(cur === letter) pos.push(index);
    });

    return pos.length > 0 ? pos[1] - pos[0] - 1 : 0;
}