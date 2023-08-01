function convertToTitle(columnNumber: number): string {
    let s: string = '';
    while(columnNumber > 26) {
        s = String.fromCharCode(--columnNumber % 26 + 65) + s;
        columnNumber = Math.floor(columnNumber / 26);
    }

    s = String.fromCharCode(columnNumber + 64) + s;
    return s;
};