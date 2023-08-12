function findLUSlength(a: string, b: string): number {
  return a === b ? -1 : a.length > b.length ?  a.length : b.length;
};