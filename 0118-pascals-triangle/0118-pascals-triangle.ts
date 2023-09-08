function generate(numRows: number): number[][] {
    const dp: number[][] = Array(numRows).fill(0).map((_, i)=> Array(i + 1).fill(0)); 
    dp[0][0] = 1;

    for (let row = 1; row < numRows; row++) {
        for (let i = 0; i < dp[row].length; i++) {
            dp[row][i] = (dp[row - 1][i] ?? 0) + (dp[row - 1][i - 1] ?? 0);
        }
    }

    return dp;
};