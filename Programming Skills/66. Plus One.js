// https://leetcode.com/problems/plus-one/?envType=study-plan-v2&envId=programming-skills
/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0;
    } else {
      digits[i]++;
      return digits;
    }
  }
  digits.unshift(1);
  return digits;

  //// another solution
  // let nineEndingIndexesArr = [];
  // for (let i = digits.length - 1; i >= 0; i--) {
  //   if (digits[i] !== 9) {
  //     digits[i] = digits[i] + 1;
  //     break;
  //   }
  //   nineEndingIndexesArr.push(i);
  // }
  // if (nineEndingIndexesArr.length) {
  //   const nineHeadIndex = nineEndingIndexesArr.pop();
  //   for (const i of nineEndingIndexesArr) {
  //     digits[i] = 0;
  //   }
  //   digits[nineHeadIndex] = 0;
  //   if (nineHeadIndex === 0) {
  //     digits.unshift(1);
  //   }
  // }
  // return digits;

  //// another solution
  // const plusOne = (BigInt(1) + BigInt(digits.join(''))).toString();
  // return plusOne.split('');
};

// console.log(plusOne([1, 2, 3])); //[1, 2, 4]
// console.log(plusOne([4, 3, 2, 1])); //[4, 3, 2, 2]
// console.log(plusOne([9])); //[1, 0]
// console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3])); //[6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]
// console.log(plusOne([9, 9])); //[1, 0, 0]
// console.log(plusOne([8, 9, 9, 9])); //[9,0,0,0]
// console.log(plusOne([2, 4, 9, 3, 9])); //[2,4,9,4,0]
// console.log(plusOne([2, 4, 9, 3, 9, 9])); //[2,4,9,4,0,0]
