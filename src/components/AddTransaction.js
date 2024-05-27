import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const { addTransaction, isClicked, openAddTab } = useContext(GlobalContext);

  const [values, setValues] = useState({
    text: "",
    amount: "",
    category: null,
  });
  const [checkedOption, setCheckedOption] = useState({ isChecked: "" });

  useEffect(() => {
    setValues({ ...values, text: "", amount: "", category: null });
    setCheckedOption({ isChecked: "" });
  }, [isClicked]);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text: values.text[0].toUpperCase() + values.text.slice(1),
      amount: +values.amount,
      category: values.category,
    };

    addTransaction(newTransaction);
    setValues({ ...values, text: "", amount: "", category: null });
    setCheckedOption({ isChecked: "" });
    openAddTab(!isClicked);
  };

  if (!isClicked) {
    return null;
  }

  return (
    <div className="addTransaction-container">
      <h3 className="addTransaction-heading">Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            required
            type="text"
            value={values.text}
            onChange={handleChange("text")}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount</label>
          <input
            required
            type="number"
            min="0"
            value={values.amount}
            onChange={handleChange("amount")}
            placeholder="Enter amount..."
          />
        </div>
        <div className="form-control">
          <label>Select Category</label>

          <div className="radioContainer">
            <div className="option-radioContainer">
              <input
                required
                type="radio"
                name="Categories"
                id="expense"
                value="Expense"
                checked={checkedOption.isChecked === "Expense"}
                onChange={handleChange("category")}
                onClick={() => setCheckedOption({ isChecked: "Expense" })}
              />

              <label htmlFor="expense" style={{ marginTop: "3px" }}>
                Expenses
              </label>
            </div>
            <div className="option-radioContainer">
              <input
                required
                type="radio"
                name="Categories"
                id="income"
                value="Income"
                checked={checkedOption.isChecked === "Income"}
                onChange={handleChange("category")}
                onClick={() => setCheckedOption({ isChecked: "Income" })}
              />

              <label htmlFor="income" style={{ marginTop: "3px" }}>
                Income
              </label>
            </div>
          </div>
        </div>

        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
};
