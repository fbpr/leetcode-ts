/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function(isBadVersion: any) {
    let curr: boolean, prev: boolean;
    return function(n: number): number {
        if (isBadVersion(1)) {
            return 1;
        }

        let l = 1, r = n;
        while (l <= r) {
            let m = Math.floor((l + r) / 2);
            curr = isBadVersion(m);
            prev = isBadVersion(m - 1);

            if (curr !== prev) {
                return m;
            }

            if (curr) {
                r = m - 1;
            } else {
                l = m + 1;
            }
        }

        return n
    };
};