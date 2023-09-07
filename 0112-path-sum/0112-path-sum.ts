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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) {
    return false;
  }

  root.val = targetSum - root.val;
  let st: TreeNode[] = [root];

  while (st.length) {
    let node: TreeNode = st.pop();
    
    if (!node.val && node.left === node.right) {
      return true;
    }
    
    if (node.left) {
      node.left.val = node.val - node.left.val;
      st.push(node.left);
    }
    
    if (node.right) {
      node.right.val = node.val-node.right.val;
      st.push(node.right);
    }
  }

  return false
};