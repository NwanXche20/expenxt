import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

export const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);

  const calculateTransactions = () => {
    let exp = 0;
    let inc = 0;

    transactions.map((transaction) => {
      transaction.category === "Expense"
        ? (exp = exp + transaction.amount)
        : (inc = inc + transaction.amount);
    });

    setExpense(exp);
    setIncome(inc);
  };

  useEffect(() => {
    calculateTransactions();
  }, [transactions]);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+₦{income.toFixed(2)}</p>
      </div>
      <div>
        <h4>Expenses</h4>
        <p className="money minus">-₦{expense.toFixed(2)}</p>
      </div>
    </div>
  );
};
