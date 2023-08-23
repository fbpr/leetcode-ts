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

function isBalanced(root: TreeNode | null): boolean {
    if (!root) {
        return true;
    }
    
    // const dfs = (root: TreeNode | null): number => {
    //     if (!root) {
    //         return 0;
    //     }
    //     const l = dfs(root.left);
    //     const r = dfs(root.right);
    //     if (l === -1 || r === -1 || Math.abs(l - r) > 1){
    //         return -1;
    //     }
    
    //     return Math.max(l, r) + 1;
    // };

    // return dfs(root) !== -1;

    let s: TreeNode[] = [root];
    while (s.length) {
        const node = s.pop();
        
        let lh = 0, rh = 0;
        let q: TreeNode[] = [];
        
        if (node.left) {
            q.push(node.left);
            while (q.length) {
                let len = q.length;

                for (let i = 0; i < len; i++) {
                    const node = q.shift();
                    if (node.left) {
                        q.push(node.left);
                    }
                    if (node.right) {
                        q.push(node!.right);
                    }
                }

                lh++;
            }
        }
        
        if (node.right) {
            q.push(node.right);
            while (q.length) {
                let len = q.length;
              
                for (let i = 0; i < len; i++) {
                    const node = q.shift();
                    if (node.left) {
                        q.push(node.left);
                    }
                    if (node.right) {
                        q.push(node.right);
                    }
                }

                rh++;
            }
        }
        
        if (Math.abs(lh - rh) > 1) {
            return false;
        }
        
        if (node.left) {
            s.push(node.left);
        }
        
        if (node.right) {
            s.push(node.right);
        }
    }   
    return true;
};