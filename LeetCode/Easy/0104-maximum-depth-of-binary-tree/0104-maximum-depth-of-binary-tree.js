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
 * @return {number}
 */
var maxDepth = function(root) {
    let maxDepth = 1;

    const search = (start, depth) => {
        if(!start) return;
        
        if(start.left) search(start.left, depth + 1);
        if(start.right) search(start.right, depth + 1);

        maxDepth = Math.max(maxDepth, depth);
    };

    search(root, maxDepth);

    return maxDepth;
};