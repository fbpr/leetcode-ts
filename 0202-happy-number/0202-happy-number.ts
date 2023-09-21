function isHappy(n: number): boolean {
  let slow = n;
  let fast = n;

  const getN = (n: number): number => {
    let total = 0;
    while (n > 0) {
      const ld = n % 10
      total += ld ** 2
      n = Math.floor(n / 10)
    }

    return total;
  }

  do {
    slow = getN(slow);
    fast = getN(getN(fast));
  } while (fast !== slow);

  return slow === 1;

  // if (n < 10) {
  //   return (n === 1);
  // } 
  
  // n = [...n.toString()].reduce((acc, i) => acc + parseInt(i) ** 2, 0);
  
  // return isHappy(n);
};