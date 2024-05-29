export default (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      localStorage.setItem(
        "initials",
        JSON.stringify({
          ...state,
          transactions: state.transactions.filter(
            (transaction) => transaction.id !== action.payload
          ),
        })
      );
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case "ADD_TRANSACTION":
      localStorage.setItem(
        "initials",
        JSON.stringify({
          ...state,
          transactions: [action.payload, ...state.transactions],
        })
      );
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    case "OPEN_ADD_TAB":
      localStorage.setItem(
        "initials",
        JSON.stringify({
          ...state,
          isClicked: action.payload,
        })
      );
      return {
        ...state,
        isClicked: action.payload,
      };
    default:
      return state;
  }
};
