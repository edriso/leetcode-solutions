// https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/description/?envType=study-plan-v2&envId=programming-skills
/**
 * @param {number[][]} moves
 * @return {string}
 */
const tictactoe = function (moves) {
  const winCases = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  let possibleWinnerMoves = {};
  let possibleWinnerPlayer;

  const addPossibleWinnerMove = (move) => {
    let moveIndex;
    if (move[0] === 0) moveIndex = move[1];
    else if (move[0] === 1) moveIndex = move[1] + 3;
    else if (move[0] === 2) moveIndex = move[1] + 6;
    possibleWinnerMoves[moveIndex] = possibleWinnerPlayer;
  };

  if (moves.length % 2 === 1) {
    possibleWinnerPlayer = "A";
    for (let i = 0; i < moves.length; i += 2) {
      addPossibleWinnerMove(moves[i]);
    }
  }

  if (moves.length % 2 === 0) {
    possibleWinnerPlayer = "B";
    for (let i = 1; i < moves.length; i += 2) {
      addPossibleWinnerMove(moves[i]);
    }
  }

  for (const win of winCases) {
    if (
      possibleWinnerMoves[win[0]] &&
      possibleWinnerMoves[win[1]] &&
      possibleWinnerMoves[win[2]]
    ) {
      return possibleWinnerPlayer;
    }
  }

  return moves.length === 9 ? "Draw" : "Pending";
};

// console.log(tictactoe([[0,0],[2,0],[1,1],[2,1],[2,2]])); //A
// console.log(tictactoe([[0,0],[1,1],[0,1],[0,2],[1,0],[2,0]])); //B
// console.log(tictactoe([[0,0],[1,1],[2,0],[1,0],[1,2],[2,1],[0,1],[0,2],[2,2]])); //Draw
