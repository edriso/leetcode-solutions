// https://leetcode.com/problems/move-zeroes/?envType=study-plan-v2&envId=programming-skills
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
    }
  }
  return nums;
};

// Given an integer array nums,
// move all 0's to the end of it while maintaining the relative order of
// the non-zero elements.

// console.log(moveZeroes([0, 1, 0, 3, 12])); //[1,3,12,0,0]
// console.log(moveZeroes([0])); //[0]
// console.log(moveZeroes([0, 0, 1])); //[1, 0, 0]
