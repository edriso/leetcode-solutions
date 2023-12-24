// https://leetcode.com/problems/set-matrix-zeroes/?envType=study-plan-v2&envId=programming-skills
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// const setZeroes = function (matrix) {
//   const zeroRows = [];
//   const zeroCols = [];

//   for (let i = 0; i < matrix.length; i++) {
//     let arr = matrix[i];
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] === 0) {
//         zeroRows.push(i);
//         zeroCols.push(j);
//       }
//     }
//   }

//   for (const row of zeroRows) {
//     matrix[row] = new Array(matrix[row].length).fill(0);
//   }

//   for (const row of matrix) {
//     for (const col of zeroCols) {
//       row[col] = 0;
//     }
//   }

//   return matrix;
// };

// Another solution
function setZeroes(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  // Arrays to track marked rows and columns
  const zeroRows = new Array(rows).fill(false);
  const zeroCols = new Array(cols).fill(false);

  // Step 1: Mark rows and columns that need to be set to zero
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === 0) {
        zeroRows[i] = true;
        zeroCols[j] = true;
      }
    }
  }

  // Step 2: Set marked rows and columns to zero
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (zeroRows[i] || zeroCols[j]) {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix;
}

// console.log(
//   setZeroes([
//     [1, 1, 1],
//     [1, 0, 1],
//     [1, 1, 1],
//   ])
// ); //[[1,0,1],[0,0,0],[1,0,1]]
// console.log(setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]])); //[[0,0,0,0],[0,4,5,0],[0,3,1,0]]
console.log(setZeroes([[0, 1]])); //[[0,0]]
