/**
 * @param {string[]} operations
 * @return {number}
 */
const calPoints = function (operations) {
  let score = 0;
  let points = [];

  // logic

  for (const point of points) {
    score += point;
  }
  return score;
};

console.log(calPoints(["5", "2", "C", "D", "+"])); //30
// console.log(calPoints(["5","-2","4","C","D","9","+","+"])); //27
// console.log(calPoints(["1","C"])); //0
