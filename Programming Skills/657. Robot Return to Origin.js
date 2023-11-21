// https://leetcode.com/problems/robot-return-to-origin/?envType=study-plan-v2&envId=programming-skills
/**
 * @param {string} moves
 * @return {boolean}
 */
const judgeCircle = function (moves) {
  let x = 0;
  let y = 0;

  for (const move of moves) {
    if (move === "R") {
      x += 1;
    } else if (move === "L") {
      x -= 1;
    } else if (move === "U") {
      y += 1;
    } else if (move === "D") {
      y -= 1;
    }
  }

  return x === 0 && y === 0;
};

// console.log(judgeCircle("UD"));//true
// console.log(judgeCircle("LL"));//false
// console.log(judgeCircle("URDL"));//true
