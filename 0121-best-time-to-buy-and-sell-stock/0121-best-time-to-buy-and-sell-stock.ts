function maxProfit(prices: number[]): number {
    let min = prices[0];
    let profit = 0; 
    for(let i = 1; i < prices.length; i++) {
        min = Math.min(min, prices[i]);
        let cost = prices[i] - min;
        profit = Math.max(profit, cost);
    }

    return profit;
};