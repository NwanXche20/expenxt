import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial State
const initialState = {
  transactions: [
    { id: 1, text: "Flower", amount: 200, category: "Expense" },
    { id: 2, text: "Groceries", amount: 18000, category: "Expense" },
    { id: 3, text: "Salary", amount: 50000, category: "Income" },
  ],
  isClicked: false,
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  function openAddTab(value) {
    dispatch({
      type: "OPEN_ADD_TAB",
      payload: value,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        isClicked: state.isClicked,
        deleteTransaction,
        addTransaction,
        openAddTab,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
