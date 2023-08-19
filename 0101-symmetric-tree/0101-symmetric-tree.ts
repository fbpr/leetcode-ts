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

function isSymmetric(root: TreeNode | null): boolean {
  if (root === null) {
    return true;
  }

  if (root.left === null && root.right === null) {
    return true;
  }

  if (root.left === null || root.right === null) {
    return false;
  }

  let q: TreeNode[] = [root];
  while (q.length) {
    let currentLength = q.length;
    let nextQ: TreeNode[] = [];
    
    for (let i = 0; i < currentLength; i++) {
      let node: TreeNode = q[i];
      if (node.left) {
        nextQ.push(node.left);
      }

      if (node.right) {
        nextQ.push(node.right);
      }
    }

    for (let i = 0, j = nextQ.length - 1; i < j; i++, j--) {
      let l = nextQ[i];
      let r = nextQ[j];

      if (l.left?.val !== r.right?.val || l.right?.val !== r.left?.val) {
        return false;
      }

      if (l.val !== r.val) {
        return false;
      }
    }

    q = nextQ;
  }

  return true;
};