/**
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */
var checkDistances = function(s, distance) {
    // Declare a set to store unique letters from the string s
    const sSet = new Set(s.split(''));

    // Iterate over the set to determine if s is a well-spaced string
    for(let letter of sSet) {
         // Calculate the index of the letter in the alphabet
        const index = letter.charCodeAt() - 'a'.charCodeAt();
        const diff = getDiff(letter, s);

        // Check if the distance matches the expected value
        if(distance[index] !== diff) return false;
    }

    return true;
};

// Function to calculate the distance between two occurrences of the letter
function getDiff(letter, s) {
    const pos = [];

    s.split('').forEach((cur, index) => {
        if(cur === letter) pos.push(index);
    });

    // Return the distance between the first two occurrences, or 0 if not found
    return pos.length > 0 ? pos[1] - pos[0] - 1 : 0;
}