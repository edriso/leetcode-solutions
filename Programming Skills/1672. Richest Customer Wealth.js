// https://leetcode.com/problems/richest-customer-wealth/?envType=study-plan-v2&envId=programming-skills
/**
 * @param {number[][]} accounts
 * @return {number}
 */
const maximumWealth = function (accounts) {
  let maxWealth = -Infinity;

  for (const customerAccount of accounts) {
    let currentWealth = 0;
    for (const wealth of customerAccount) {
      currentWealth += wealth;
    }

    // if (currentWealth > maxWealth) maxWealth = currentWealth;
    maxWealth = Math.max(maxWealth, currentWealth);
  }

  return maxWealth;
};

// console.log(maximumWealth([[1,2,3],[3,2,1]]));//6
console.log(
  maximumWealth([
    [1, 5],
    [7, 3],
    [3, 5],
  ])
); //10
// console.log(maximumWealth([[2,8,7],[7,1,3],[1,9,5]]));//17
