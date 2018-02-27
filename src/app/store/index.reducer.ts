const INITIAL_STATE = {
    amount: 0
};

export const mainReducer = (state: any = INITIAL_STATE, action) => {
    if(action.type === 'ADD_TRANSACTION') {
        return {
          ...state,
          amount: state.amount + action.payload
        };
    }
    else {
      return state;
    }
};
