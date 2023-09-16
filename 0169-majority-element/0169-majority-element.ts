function majorityElement(nums: number[]): number {
    let c = 0, element: number;
    for (let num of nums) {
        if (c === 0) {
            element = num;
            c = 1;
        } else if (num === element) {
            c++;
        } else {
            c--;
        }
    }

    return element;
};