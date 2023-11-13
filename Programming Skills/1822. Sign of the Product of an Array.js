// https://leetcode.com/problems/sign-of-the-product-of-an-array/?envType=study-plan-v2&envId=programming-skills
/**
 * @param {number[]} nums
 * @return {number}
 */
const arraySign = function (nums) {
  let negativeCount = 0;
  for (const num of nums) {
    if (num === 0) return 0;
    if (num < 0) negativeCount++;
  }
  if (negativeCount % 2 === 0) return 1;
  return -1;
};

// console.log(arraySign([-1, -2, -3, -4, 3, 2, 1])); //1
// console.log(arraySign([1, 5, 0, 2, -3])); //0
// console.log(arraySign([-1, 1, -1, 1, -1])); //-1
