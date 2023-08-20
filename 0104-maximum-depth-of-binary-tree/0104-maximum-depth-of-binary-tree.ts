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

function maxDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  let q: TreeNode[] = [root];
  let c: number = 0;
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

    c++;
    q = nextQ;
  }

  return c;
  // let s: TreeNode[] = [root];
  // let v: number[] = [1];
  // let maxDepth: number = 0;
  // while (s.length) {
  //   let node: TreeNode = s.pop();
  //   let num: number = v.pop();
  //   maxDepth = Math.max(num, maxDepth);
  //   if (node.left) {
  //     s.push(node.left);
  //     v.push(num + 1);
  //   }

  //   if (node.right) {
  //     s.push(node.right);
  //     v.push(num + 1);
  //   }
  // }

  // return maxDepth;
};