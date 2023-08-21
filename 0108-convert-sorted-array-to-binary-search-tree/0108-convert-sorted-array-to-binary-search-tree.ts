/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     l: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, l?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.l = (l===undefined ? null : l)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function sortedArrayToBST(nums: number[]): TreeNode | null {
  if (nums.length === 0) {
    return null;
  }

  const m: number = Math.floor(nums.length / 2);
  return new TreeNode(
    nums[m],
    sortedArrayToBST(nums.slice(0, m)),
    sortedArrayToBST(nums.slice(m + 1))
  );

  // const root = new TreeNode(0);
  // const t = [{ node: root, l: 0, r: nums.length - 1}];
    
  // while(t.length) {
  //   const { node, l, r } = t.pop();
  //   const m = Math.floor((l + r) / 2);
  
  //   node.val = nums[m];
  //   if (l < m) {
  //       node.left = new TreeNode(0);
  //       t.push({ node: node.left, l, r: m - 1 });
  //   }
    
  //   if (r > m) {
  //     node.right = new TreeNode(0);
  //     t.push({ node: node.right, l: m + 1, r });
  //   }
  // }
  // return root
};