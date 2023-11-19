// https://leetcode.com/problems/to-lower-case/?envType=study-plan-v2&envId=programming-skills
/**
 * @param {string} s
 * @return {string}
 */
// const toLowerCase = function (s) {
//   const alphabets = {
//     A: "a",
//     B: "b",
//     C: "c",
//     D: "d",
//     E: "e",
//     F: "f",
//     G: "g",
//     H: "h",
//     I: "i",
//     J: "j",
//     K: "k",
//     L: "l",
//     M: "m",
//     N: "n",
//     O: "o",
//     P: "p",
//     Q: "q",
//     R: "r",
//     S: "s",
//     T: "t",
//     U: "u",
//     V: "v",
//     W: "w",
//     X: "x",
//     Y: "y",
//     Z: "z",
//   };

//   let lowerCase = "";
//   for (const char of s) {
//     lowerCase += alphabets[char] || char;
//   }
//   return lowerCase;
// };

//// another solution
function toLowerCase(s) {
  let result = "";

  for (let i = 0; i < s.length; i++) {
    const charCode = s.charCodeAt(i);

    // Check if the character is an uppercase letter
    if (charCode >= 65 && charCode <= 90) {
      // Convert uppercase letter to lowercase using ASCII values
      result += String.fromCharCode(charCode + 32);
    } else {
      // Keep the character unchanged if it's not an uppercase letter
      result += s[i];
    }
  }

  return result;
}

// console.log(toLowerCase("Hello")); //hello
// console.log(toLowerCase("Here")); //here
console.log(toLowerCase("LOVELY")); //lovely
