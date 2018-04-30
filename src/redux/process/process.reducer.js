
export const initialState = {
    squares: [0,1,2,3,4,5,6,7,8],
    playerSign: 'X',
    AISign: 'O',
    finished: false,
    winner: null
  };

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_BOARD':
      return {
        ...state,
        squares: action.payload
      };
    case 'SET_WINNER':
      return {
        ...state,
        winner: action.payload,
        finished: true
      };
    case 'RESET_GAME':
      return {
        ...state,
        squares: initialState.squares,
        finished: false,
        winner: null
      };
    default:
      return state
  }
}
