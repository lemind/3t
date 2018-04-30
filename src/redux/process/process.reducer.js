
export const initialState = {
    squares: [0,1,2,3,4,5,6,7,8],
    started: false,
    winner: null
  };

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_BOARD':
      return {
        ...state,
        squares: action.payload
      };
    case 'START_GAME':
      return {
        ...state,
        started: true
      };
    case 'SET_WINNER':
      return {
        ...state,
        winner: action.payload
      };
    case 'RESET_GAME':
      return {
        ...state,
        squares: initialState.squares,
        started: false,
        winner: null
      };
    default:
      return state
  }
}
