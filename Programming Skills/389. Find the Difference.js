// https://leetcode.com/problems/find-the-difference/?envType=study-plan-v2&envId=programming-skills
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
const findTheDifference = function (s, t) {
  let differenceObj = t.split('').reduce((acc, cur) => {
    count = acc[cur] ? ++acc[cur] : 1;
    return { ...acc, [cur]: count };
  }, {});

  for (const letter of s) {
    if (differenceObj[letter] > 1) {
      differenceObj[letter]--;
    } else {
      delete differenceObj[letter];
    }
  }

  return Object.keys(differenceObj).join('');
};

console.log(findTheDifference('hello world', 'hello zworld')); //z
