/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if(!list1) return list2;
    if(!list2) return list1;

    let sorted;

    if(list1.val <= list2.val) {
        sorted = list1;
        list1 = list1.next;
    } else {
        sorted = list2;
        list2 = list2.next;
    }

    let after = sorted;

    while(list1 && list2) {
        if(list1.val <= list2.val) {
            after.next = list1;
            list1 = list1.next;
        } else {
            after.next = list2;
            list2 = list2.next;           
        }
        after = after.next;
    }

    while(list1) {
        after.next = list1;
        list1 = list1.next;
        after = after.next;
    }

    while(list2) {
        after.next = list2;
        list2 = list2.next;
        after = after.next;
    }

    return sorted;
};