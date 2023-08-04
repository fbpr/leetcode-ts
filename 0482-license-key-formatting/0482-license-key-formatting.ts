function licenseKeyFormatting(s: string, k: number): string {
  // const regex: RegExp = /\-/g;
  // const str = s.replace(regex, '').toUpperCase().split('');
  // for (let i = str.length - 1 - k; i >= 0; i -= k) {
  //     str[i] = str[i] + '-';
  // }

  // return str.join('');

  const regex: RegExp = /\-/g;
  let str = s.replace(regex, "");
  let h = str.length % k;
  let g: string[] = [];

  if (h) {
    g.push(str.substring(0, h));
  }

  for (let i = h; i < str.length; i += k) {
    g.push(str.substring(i, i + k) );
  }

  return g.join("-").toUpperCase();
};