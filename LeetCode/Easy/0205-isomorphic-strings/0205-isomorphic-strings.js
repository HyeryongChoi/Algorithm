/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
   const mapped = {};

    for(let i = 0; i < s.length; i++) {
        const letter = s[i];

        if(mapped[letter] && mapped[letter] !== t[i]) return false; 
        if(!mapped[letter] && Object.values(mapped).includes(t[i])) return false;
    
        mapped[letter] = t[i];
    };

    return true;
};