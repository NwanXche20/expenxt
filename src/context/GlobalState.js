import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// demo transactions: [
//   { id: 1, text: "Flower", amount: 200, category: "Expense" },
//   { id: 2, text: "Groceries", amount: 18000, category: "Expense" },
//   { id: 3, text: "Salary", amount: 50000, category: "Income" },
// ],

// Initial State
const initialState = {
  transactions: [],
  isClicked: false,
};

// Using localStorage to house our data
const storedInitialStates = localStorage.getItem("initials");

let globalInitials;

if (storedInitialStates) {
  globalInitials = JSON.parse(storedInitialStates);
} else {
  localStorage.setItem("initials", JSON.stringify(initialState));

  globalInitials = JSON.parse(localStorage.getItem("initials"));
}

// Create Context
export const GlobalContext = createContext(globalInitials);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, globalInitials);

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
