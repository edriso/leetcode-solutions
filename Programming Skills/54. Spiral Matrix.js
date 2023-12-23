// https://leetcode.com/problems/spiral-matrix/?envType=study-plan-v2&envId=programming-skills
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
// const spiralOrder = function (matrix) {
//   const output = [];

//   while (matrix.length) {
//     const firstArr = matrix.shift();
//     output.push(...firstArr);

//     for (const arr of matrix) {
//       output.push(arr.pop());
//       arr.reverse();
//     }

//     matrix.reverse();
//   }

//   return output;
// };

// const spiralOrder = function (matrix) {
//   if (!matrix || matrix.length === 0 || matrix[0]?.length === 0) {
//     return [];
//   }

//   const result = [];
//   let top = 0,
//     bottom = matrix.length - 1,
//     left = 0,
//     right = matrix[0].length - 1;

//   while (top <= bottom && left <= right) {
//     // Traverse top row
//     for (let i = left; i <= right; i++) {
//       result.push(matrix[top][i]);
//     }
//     top++;

//     // Traverse right column
//     for (let i = top; i <= bottom; i++) {
//       result.push(matrix[i][right]);
//     }
//     right--;

//     // Check if there's a bottom row to traverse
//     if (top <= bottom) {
//       // Traverse bottom row
//       for (let i = right; i >= left; i--) {
//         result.push(matrix[bottom][i]);
//       }
//       bottom--;
//     }

//     // Check if there's a left column to traverse
//     if (left <= right) {
//       // Traverse left column
//       for (let i = bottom; i >= top; i--) {
//         result.push(matrix[i][left]);
//       }
//       left++;
//     }
//   }

//   return result;
// };

const spiralOrder = function (matrix) {
  if (!matrix || matrix.length === 0 || matrix[0]?.length === 0) {
    return [];
  }

  const result = [];
  let top = 0,
    bottom = matrix.length - 1,
    left = 0,
    right = matrix[0].length - 1;
  let direction = 0; // 0: go right, 1: go down, 2: go left, 3: go up

  while (top <= bottom && left <= right) {
    if (direction === 0) {
      for (let i = left; i <= right; i++) {
        result.push(matrix[top][i]);
      }
      top++;
    } else if (direction === 1) {
      for (let i = top; i <= bottom; i++) {
        result.push(matrix[i][right]);
      }
      right--;
    } else if (direction === 2) {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom--;
    } else if (direction === 3) {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left++;
    }

    direction = (direction + 1) % 4;
  }

  return result;
};

console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
); //[1,2,3,6,9,8,7,4,5]
// console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]])); //[1,2,3,4,8,12,11,10,9,5,6,7]
