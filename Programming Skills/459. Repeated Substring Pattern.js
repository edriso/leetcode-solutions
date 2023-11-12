// https://leetcode.com/problems/repeated-substring-pattern/?envType=study-plan-v2&envId=programming-skills
/**
 * @param {string} s
 * @return {boolean}
 */
const repeatedSubstringPattern = function (s) {
  for (let i = 1; i <= s.length / 2; i++) {
    if (s.length % i === 0) {
      let pattern = s.slice(0, i);
      let counter = 0;
      for (let j = 0; j < s.length; j += i) {
        if (s.slice(j, i + j) === pattern) {
          counter++;
          if (counter === s.length / i) {
            return true;
          }
          continue;
        }
        break;
      }
    }
  }

  return false;
};

// console.log(repeatedSubstringPattern('abab')); //true
// console.log(repeatedSubstringPattern('aba')); //false
// console.log(repeatedSubstringPattern('abcabcabcabc')); //true
// console.log(repeatedSubstringPattern('abac')); //false
// console.log(repeatedSubstringPattern('bb')); //true
// console.log(repeatedSubstringPattern('ababab')); //true
// console.log(repeatedSubstringPattern('abcdab')); //false
// console.log(repeatedSubstringPattern('ababababab')); //true
// console.log(repeatedSubstringPattern('babbabbabbabbab')); //true
// console.log(repeatedSubstringPattern('abcdabcdabcdabcdabcd')); //true
// console.log(repeatedSubstringPattern('abccbabccbabccbabccbabccb')); //true
// console.log(
//   repeatedSubstringPattern('abcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefg'),
//   ); //true
// console.log(repeatedSubstringPattern('aaaaaaaaaaaaa')); //true
