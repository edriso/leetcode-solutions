// https://leetcode.com/problems/monotonic-array/?envType=study-plan-v2&envId=programming-skills
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const isMonotonic = function (nums) {
  const isIncreasing = nums[nums.length - 1] - nums[0] > 0;

  if (isIncreasing) {
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i + 1] < nums[i]) {
        return false;
      }
    }
  } else {
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] < nums[i + 1]) {
        return false;
      }
    }
  }

  return true;
};

// console.log(isMonotonic([1, 2, 2, 3])); //true
// console.log(isMonotonic([6, 5, 4, 4])); //true
// console.log(isMonotonic([1, 3, 2])); //false
