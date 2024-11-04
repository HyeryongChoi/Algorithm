/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    const people = names.map((name, i) => {
        return [name, heights[i]];
    });

    const sortedNames = people.sort((a,b) => b[1]-a[1]).map(person => person[0]);

    return sortedNames;
};