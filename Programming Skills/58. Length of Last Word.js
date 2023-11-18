// https://leetcode.com/problems/length-of-last-word/?envType=study-plan-v2&envId=programming-skills
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function (s) {
  const lastWord = s.trimEnd();
  const lastWordIndex = lastWord.lastIndexOf(" ") + 1;
  return lastWord.slice(lastWordIndex).length;
};

// console.log(lengthOfLastWord("Hello")); //5
// console.log(lengthOfLastWord("Hello World")); //5
console.log(lengthOfLastWord("   fly me   to   the moon  ")); //4
// console.log(lengthOfLastWord('luffy is still joyboy')); //6

//// another solution
// const lengthOfLastWord = function(s) {
//   // Trim leading and trailing spaces
//   const trimmedString = s.trim();
//   let length = 0;
//   // Iterate through the string from right to left
//   for (let i = trimmedString.length - 1; i >= 0; i--) {
//       // Break the loop when a space is encountered after the last word
//       if (trimmedString[i] === ' ' && length > 0) {
//           break;
//       }
//       // Increment the length for non-space characters
//       if (trimmedString[i] !== ' ') {
//           length++;
//       }
//   }
//   return length;
// };
