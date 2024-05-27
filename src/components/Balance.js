import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Balance = () => {
  const { transactions, isClicked, openAddTab } = useContext(GlobalContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    calculateTransactions();
  }, [transactions]);

  const calculateTransactions = () => {
    let exp = 0;
    let inc = 0;

    transactions.map((transaction) => {
      transaction.category === "Expense"
        ? (exp = exp + transaction.amount)
        : (inc = inc + transaction.amount);
    });

    return setTotal(inc - exp);
  };

  return (
    <div className="balance-container">
      <div>
        <h4>Your Balance</h4>
        <h1>₦{total.toFixed(2)}</h1>
      </div>

      <button className="btn add-btn" onClick={() => openAddTab(!isClicked)}>
        {isClicked ? "Close" : "Add"}
      </button>
    </div>
  );
};
