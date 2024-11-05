/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    let [front, rear] = [0, s.length-1];

    while(front <= rear) {
        if(s[front++] !== s[rear--]) return false;
    }

    return true;
};