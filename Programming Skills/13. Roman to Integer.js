// https://leetcode.com/problems/roman-to-integer/?envType=study-plan-v2&envId=programming-skills
/**
 * @param {string} s
 * @return {number}
 */

const romanToInt = function (s) {
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  // const romanSubtraction = {
  //   V: "I",
  //   X: "I",
  //   L: "X",
  //   C: "X",
  //   D: "C",
  //   M: "C",
  // };

  let result = 0;

  // for (let i = 0; i < s.length; i++) {
  //   result += romanMap [s[i]];
  //   if (romanSubtraction[s[i]] && s[i - 1] === romanSubtraction[s[i]]) {
  //     result -= 2 * romanMap [romanSubtraction[s[i]]];
  //   }
  // }
  //// another solution
  for (let i = 0; i < s.length; i++) {
    const currentSymbol = s[i];
    const currentValue = romanMap[currentSymbol];
    const nextSymbol = s[i + 1];
    const nextValue = romanMap[nextSymbol];

    if (nextValue > currentValue) {
      result += nextValue - currentValue;
      i++; // Skip the next symbol since it has been considered
    } else {
      result += currentValue;
    }
  }

  return result;
};

// console.log(romanToInt("III")); //3
// console.log(romanToInt("IIIV")); //6
// console.log(romanToInt("LVIII")); //58
// console.log(romanToInt("MCMXCIV")); //1994
console.log(romanToInt("MCDLXXVI")); //1476
