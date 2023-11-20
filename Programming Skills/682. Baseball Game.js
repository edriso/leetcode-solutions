// https://leetcode.com/problems/baseball-game/?envType=study-plan-v2&envId=programming-skills
/**
 * @param {string[]} operations
 * @return {number}
 */
const calPoints = function (operations) {
  let score = 0;
  const points = [];

  operations.reverse();
  while (operations.length) {
    const curr = operations.pop();
    if (curr === "C") {
      points.pop();
    } else if (curr === "D") {
      const doubleOfPrevScore = 2 * points[points.length - 1];
      points.push(doubleOfPrevScore);
    } else if (curr === "+") {
      const sumOfLastTwoScore =
        points[points.length - 2] + points[points.length - 1];
      points.push(sumOfLastTwoScore);
    } else {
      points.push(parseInt(curr));
    }
  }

  for (const point of points) {
    score += point;
  }
  return score;
};

//// another solution
// const calPoints = function (operations) {
//   let score = 0;
//   let points = [];

//   for (const op of operations) {
//     if (!isNaN(op)) {
//       points.push(op * 1);
//     } else if (op === "C") {
//       points.pop();
//     } else if (op === "D") {
//       points.push(2 * points[points.length - 1]);
//     } else if (op === "+") {
//       sumOfLastTwoScore = points[points.length - 1] + points[points.length - 2];
//       points.push(sumOfLastTwoScore);
//     }
//   }

//   for (const point of points) {
//     score += point;
//   }

//   return score;
// };

// console.log(calPoints(["5", "2", "C", "D", "+"])); //30
console.log(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"])); //27
// console.log(calPoints(["1","C"])); //0
