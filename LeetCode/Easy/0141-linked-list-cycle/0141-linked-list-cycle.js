/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(!head) return false;
    
    const visited = new Set([head.val]);

    let next = head.next;

    while(next) {
        next = next.next;

        if(!next) break;

        const before = visited.size;
        visited.add(next);
        const after = visited.size;

        if(before === after) return true;
    }

    return false;
};