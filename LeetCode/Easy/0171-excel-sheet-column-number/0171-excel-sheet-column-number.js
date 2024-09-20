/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    // AA~AZ 26+1 ~ 27+26
    // BA~BZ 2*26+1 ~ 27+26+1+26
    // CA 3*26^1 + 1
    // ZZ 27 + 26*26 ??

    const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let answer = 0;
    const arr = columnTitle.split('');

    arr.forEach((alpha, index) => {
        const 지수 = arr.length - 1 - index;
        const 배수 = str.indexOf(alpha) + 1;

        answer += 배수*(26**지수);
    });

    return answer;
};