import { WINNER_COMBOS } from "../constans"

export const checkWinnerFrom = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (
        boardToCheck[a] &&
        boardToCheck[a]=== boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ){
        return boardToCheck[a]
      }
    }
    // If there is no winner
    return null
}

export const checkEndGame = (newBoard) => {
    // If there is no empty square left, the game is over
    return newBoard.every((square) => square !== null)
}