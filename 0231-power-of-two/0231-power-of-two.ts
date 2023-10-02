function isPowerOfTwo(n: number): boolean {
    return n < 1 ? false : ((n & (n - 1)) === 0);
};