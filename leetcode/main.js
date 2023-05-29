//Counting Bits
const countBits = function (num) {
  debugger;
  let res = [0];
  for (let i = 1; i <= num; i++) {
    const x = i >> 1;
    const odd = i & 1;
    res[i] = res[x] + odd; // if two times 1 is available then add them.
  }
  return res;
};
countBits(5);
// convert number into bits
// count n0 of 1 bits in a number.
