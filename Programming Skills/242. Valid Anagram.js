// https://leetcode.com/problems/valid-anagram/?envType=study-plan-v2&envId=programming-skills
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// const isAnagram = function (s, t) {
//   if (
//     s.length === t.length &&
//     [...s].sort().join('') === [...t].sort().join('')
//   ) {
//     return true;
//   }
//   return false;
// };

//// another solution
const isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const charCount = [...s].reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});

  for (const char of t) {
    if (!charCount[char]) return false;
    charCount[char]--;
  }

  return true;
};

console.log(isAnagram('anagram', 'nagaram')); //true
// console.log(isAnagram('rat', 'car')); //false
// console.log(isAnagram('aa', 'bb')); //false
