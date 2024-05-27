import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.category == "Expense" ? "-" : "+";

  return (
    <li className={transaction.category == "Expense" ? "minus" : "plus"}>
      {transaction.text}{" "}
      <span>
        {sign}₦{Math.abs(transaction.amount)}
      </span>
      <button
        onClick={() => deleteTransaction(transaction.id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};
