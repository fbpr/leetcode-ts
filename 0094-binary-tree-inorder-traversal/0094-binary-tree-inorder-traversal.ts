/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function inorderTraversal(root: TreeNode | null): number[] {
  if (!root) {
      return [];
  }
 
  let curr = root, pre: TreeNode, res: number[] = [];
  while (curr !== null) {
    if (curr.left === null) {
      res.push(curr.val);
      curr = curr.right;
    }
    else {
      pre = curr.left;
      while (pre.right !== null && pre.right !== curr) {
        pre = pre.right;
      }

      if (pre.right === null) {
        pre.right = curr;
        curr = curr.left;
      } else {
        pre.right = null;
        res.push(curr.val);
        curr = curr.right;
      } 
    }
  }

  return res;
};