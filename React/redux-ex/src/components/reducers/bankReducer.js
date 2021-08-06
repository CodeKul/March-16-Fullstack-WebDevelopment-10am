const intialState = {
  balance: 0,
  isSavings: true,
  
};

// action={type:"deposit",payload:100}
export function bankReducer(state = intialState, action) {
  switch (action.type) {
    case "deposit":
      return {
        balance: state.balance + action.payload,
        isSavings: state.isSavings,
      };
    case "withdraw":
      return {
        balance: state.balance - action.payload,
        isSavings: state.isSavings,
      };
    case "interest":
      return { balance: state.balance * 1.04, isSavings: state.isSavings };
    case "delete-acct":
      return { balance: 0, isSavings: state.isSavings };
    case "change-acct":
      return { balance: state.balance, isSavings: !state.isSavings };
    default:
      return state;
  }
}
