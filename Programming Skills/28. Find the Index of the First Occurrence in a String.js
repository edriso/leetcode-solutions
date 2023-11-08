// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/?envType=study-plan-v2&envId=programming-skills
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function (haystack, needle) {
  let matchedStr = '';
  let matchIndex = 0;
  let searchedIndex = 0;

  while (matchedStr !== needle && searchedIndex <= haystack.length) {
    for (let i = searchedIndex; i < haystack.length; i++) {
      if (matchedStr === needle) break;

      if (haystack[i] === needle[matchedStr.length]) {
        matchedStr += haystack[i];
        continue;
      }

      matchedStr = '';
      matchIndex = i + 1;
    }
    searchedIndex++;
  }

  if (matchedStr !== needle) return -1;

  return matchIndex;
};

console.log(strStr('sadbutsad', 'sad')); //0
console.log(strStr('leetcode', 'leeto')); //-1
console.log(strStr('mississippi', 'issip')); //4
