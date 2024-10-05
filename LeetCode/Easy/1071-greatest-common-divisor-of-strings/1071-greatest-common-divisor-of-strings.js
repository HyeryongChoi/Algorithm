/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
let getGCD = (num1, num2) => {
    let gcd = 1;

    for(let i=2; i<=Math.min(num1, num2); i++){
        if(num1 % i === 0 && num2 % i === 0){
            gcd = i;
        }
    }

    return gcd;
}

var gcdOfStrings = function(str1, str2) {

    if (str1 + str2 !== str2 + str1) return '';

    const gcd = getGCD(str1.length, str2.length);
    const shortest = str1.length > str2.length ? str1 : str2;
    const common = shortest.substring(0,gcd);

    return common;
};