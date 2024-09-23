/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    // 10 - phone number
    // 1 - gender
    // 2 - age
    // 2 - seat

    // the number of passengers who are strictly more than 60 years old
    return details.filter((detail) => {
        const age = detail.slice(11, 13);
        return age > 60 ? true : false;
    }).length;
};