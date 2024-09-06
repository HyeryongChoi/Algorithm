/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    // define X
    let x = 0;

    // define function
    const isIncrement = (operation) => {
        if(operation.includes('+')) return true;
        return false;
    };

    // iterate over array 'operations'
    operations.forEach((operation) => {
        if(isIncrement(operation)) x = x + 1;
        else x = x - 1;
    });

    return x;
};