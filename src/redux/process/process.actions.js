export const actions = {
  updateBoard: (payload) => ({
    type: 'UPDATE_BOARD',
    payload
  }),
  setWinner: (payload) => ({
    type: 'SET_WINNER',
    payload
  }),
  resetGame: () => ({
    type: 'RESET_GAME'
  }),
  startGame: () => ({
    type: 'START_GAME'
  })
}
