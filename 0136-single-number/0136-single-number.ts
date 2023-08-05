function singleNumber(nums: number[]): number {
    let sn = 0;
    for (let i = 0; i< nums.length; i++) {
        sn ^= nums[i];
    } 
    
    return sn;   
};