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

function countNodes(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  const st: TreeNode[] = [root];
  let count = 0;

  while (st.length) {
    let node = st.pop();

    if (node.left) {
      st.push(node.left);
    }
  
    if (node.right) {
      st.push(node.right);
    }

    count++;
  }

  return count;
};