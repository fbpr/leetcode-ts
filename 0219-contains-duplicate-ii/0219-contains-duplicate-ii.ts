function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const m = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        if (Math.abs(m.get(nums[i]) - i) <= k) {
            return true;
        }

        m.set(nums[i], i);
    }

    return false;
};