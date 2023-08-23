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






//   let ls: [TreeNode, number][] = [[root.left, root.left ? 1 : 0]];
//   let rs: [TreeNode, number][] = [[root.right, root.right ? 1 : 0]];
//   let lh: number = 0, rh: number = 0;

//   while (ls.length) {
//     let [node, currH]: [TreeNode, number] = ls.pop();
//     lh = Math.max(lh, currH);
//     if (node) {
//       if (node.left) {
//         ls.push([node.left, currH + 1]);
//       }
      
//       if (node.right) {
//         ls.push([node.right, currH + 1])
//       }
//     }
//   }

//   while (rs.length) {
//     let [node, currH]: [TreeNode, number] = rs.pop();
//     rh = Math.max(rh, currH);

//     if (node) {
//       if (node.left) {
//         rs.push([node.left, currH + 1]);
//       }

//       if (node.right) {
//         rs.push([node.right, currH + 1]);
//       }
//     }
//   }

//   return Math.abs(lh - rh) > 1 ? false : true;
};