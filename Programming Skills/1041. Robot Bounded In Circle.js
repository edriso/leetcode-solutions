// https://leetcode.com/problems/robotAt-bounded-in-circle/?envType=study-plan-v2&envId=programming-skills
/**
 * @param {string} instructions
 * @return {boolean}
 */
// const isRobotBounded = function (instructions) {
//   const compass = [
//     {
//       direction: "North",
//       axis: "y",
//       step: 1,
//     },
//     {
//       direction: "East",
//       axis: "x",
//       step: 1,
//     },
//     {
//       direction: "South",
//       axis: "y",
//       step: -1,
//     },
//     {
//       direction: "West",
//       axis: "x",
//       step: -1,
//     },
//   ];

//   let headIndex = 0;

//   const robotAt = {
//     x: 0,
//     y: 0,
//   };

//   for (let i = 1; i <= 4; i++) {
//     for (const instruction of instructions) {
//       if (instruction === "G") {
//         let axis = compass[headIndex].axis;
//         let step = compass[headIndex].step;
//         robotAt[axis] = robotAt[axis] + step;
//       } else if (instruction === "L") {
//         headIndex = headIndex !== 0 ? headIndex - 1 : compass.length - 1;
//       } else if (instruction === "R") {
//         headIndex = headIndex !== compass.length - 1 ? headIndex + 1 : 0;
//       }
//     }

//     if (robotAt.x === 0 && robotAt.y === 0) return true;
//   }

//   return false;
// };

// Another solution
const isRobotBounded = function (instructions) {
  // Initial position and direction
  let x = 0,
    y = 0,
    dx = 0,
    dy = 1;

  // Simulate the robot's movement
  for (let instruction of instructions) {
    if (instruction === "G") {
      x += dx;
      y += dy;
    } else if (instruction === "L") {
      [dx, dy] = [-dy, dx]; // Rotate 90 degrees anti-clockwise
    } else if (instruction === "R") {
      [dx, dy] = [dy, -dx]; // Rotate 90 degrees clockwise
    }
  }

  // Check if the robot returns to the initial position or faces a different direction
  return (x === 0 && y === 0) || dx !== 0 || dy !== 1;
};

console.log(isRobotBounded("GGLLGG")); //true
// console.log(isRobotBounded("GG")); //false
// console.log(isRobotBounded("GL")); //true

// Notes:
// In the context of a Cartesian coordinate system where the positive y-axis is usually pointing upwards, and the positive x-axis is pointing to the right, the standard convention for rotation is as follows:
// To rotate 90 degrees clockwise, you swap x and y and negate the new y value.
// To rotate 90 degrees anti-clockwise, you swap x and y and negate the new x value.

// [dx, dy] = [-dy, dx];: This is the destructuring assignment syntax.
// It takes the values from the right-hand side array ([-dy, dx]) and assigns them to the variables on the left-hand side ([dx, dy]).
// As a result of this line, dx will get the value -dy, and dy will get the value dx.
