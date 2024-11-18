/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    const queue = [[root, 0]];
    const levelSum = [];

    while(queue.length > 0) {
        const [now, level] = queue.shift();

        if(levelSum.length < level + 1) levelSum.push([0, 0]); // sum, count

        levelSum[level][0] += now.val;
        levelSum[level][1] += 1;

        if(now.left) queue.push([now.left, level+1]);
        if(now.right) queue.push([now.right, level+1]);
   
    }

    return levelSum.map(([sum, count]) => sum/count);
};