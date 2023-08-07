/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let l = 0, r = l + 1;

    while (r <= nums.length - 1) {
        if (nums[l] !== 0) {
            l++;
            r++;
        } else {
            if (nums[r] !== 0) {
                [nums[l], nums[r]] = [nums[r], nums[l]];
                l++;
            }
            r++;
        }
    }
};