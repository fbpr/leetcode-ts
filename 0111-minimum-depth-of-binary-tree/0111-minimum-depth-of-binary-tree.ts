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

function minDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  let q: TreeNode[] = [root];
  let d: number = 0;
  while (q.length) {
    let currentLength = q.length;
    let nextQ: TreeNode[] = [];
    
    for (let i = 0; i < currentLength; i++) {
      let node: TreeNode = q[i];

      if (node.left === node.right) {
        return d + 1;
      }
      
      if (node.left) {
        nextQ.push(node.left);
      }

      if (node.right) {
        nextQ.push(node.right);
      }
    }

    d++;
    q = nextQ;
  }

  return d + 1;
};