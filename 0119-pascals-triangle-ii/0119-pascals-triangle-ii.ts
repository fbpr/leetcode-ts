function getRow(rowIndex: number): number[] {
    let res: number[] = [1];

    for (let i = 1; i <= rowIndex; i++) {
        res.push(res[i - 1] * (rowIndex - i + 1) / i)
    }

    return res;
};