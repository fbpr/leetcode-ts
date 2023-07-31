function containsDuplicate(nums: number[]): boolean {
    const s = new Set<number>(nums);
    return s.size !== nums.length;
};