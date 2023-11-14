// https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/?envType=study-plan-v2&envId=programming-skills
/**
 * @param {number[]} arr
 * @return {boolean}
 */
const canMakeArithmeticProgression = function (arr) {
  const orderedArr = arr.sort((a, b) => a - b);
  let diff = orderedArr[1] - orderedArr[0];
  for (let i = 2; i < orderedArr.length; i++) {
    if (orderedArr[i] - orderedArr[i - 1] !== diff) {
      return false;
    }
  }
  return true;
};

// console.log(canMakeArithmeticProgression([3, 5, 1])); //true
// console.log(canMakeArithmeticProgression([1, 2, 4])); //false
// console.log(canMakeArithmeticProgression([-68, -96, -12, -40, 16])); //true
