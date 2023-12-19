// https://leetcode.com/problems/matrix-diagonal-sum/?envType=study-plan-v2&envId=programming-skills
/**
 * @param {number[][]} mat
 * @return {number}
 */
const diagonalSum = function (mat) {
  let sum = 0;

  for (let i = 0; i < mat.length; i++) {
    sum += mat[i][i];
    sum += mat[i][mat.length - i - 1];
  }

  if (mat.length % 2 !== 0) {
    const mid = (1 + mat.length) / 2 - 1;
    sum -= mat[mid][mid];
  }

  return sum;
};

// console.log(
//   diagonalSum([
//     [7, 3, 1, 9],
//     [3, 4, 6, 9],
//     [6, 9, 6, 6],
//     [9, 5, 8, 5],
//   ])
// ); //55
// console.log(diagonalSum([[1,2,3],
//     [4,5,6],
//     [7,8,9]])); //25
// console.log(diagonalSum([[1,1,1,1],
//     [1,1,1,1],
//     [1,1,1,1],
//     [1,1,1,1]])); //8
// console.log(diagonalSum([[5]])); //5
