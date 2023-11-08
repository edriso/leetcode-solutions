// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/?envType=study-plan-v2&envId=programming-skills
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
function strStr(haystack, needle) {
  if (needle === '') return 0;

  for (let i = 0; i <= haystack.length - needle.length; i++) {
    if (haystack.substring(i, i + needle.length) === needle) {
      return i;
    }
  }

  return -1;
}

//// Another solution
// const strStr = function (haystack, needle) {
//   if (haystack.length < needle.length) return -1;

//   for (let i = 0; i <= haystack.length - needle.length; i++) {
//     let match = true;
//     for (let j = 0; j < needle.length; j++) {
//       if (haystack[i + j] !== needle[j]) {
//         match = false;
//         break;
//       }
//     }
//     if (match) return i;
//   }

//   return -1;
// };

// console.log(strStr('sadbutsad', 'sad')); //0
// console.log(strStr('leetcode', 'leeto')); //-1
// console.log(strStr('aaa', 'aaaa')); //-1
// console.log(strStr('mississippi', 'issip')); //4
// console.log(strStr('mississippi', 'pi')); //9
// console.log(strStr('mississippi', 'pii')); //-1
// console.log(strStr('aabaaabaaac', 'aabaaac')); //4
