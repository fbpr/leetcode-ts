function titleToNumber(columnTitle: string): number {
  let res: number = 0;
  for(const c of columnTitle) {
    let d: number = c.charCodeAt(0) - 65 + 1
    res = res * 26 + d;
  }
  
  return res;
};