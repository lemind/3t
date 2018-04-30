export const initialState = {

  };

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DO':
      return {
        ...state
      };
    default:
      return state
  }
}
