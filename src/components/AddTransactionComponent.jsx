import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function AddTransactionComponent() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState();

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000), // can use UUID to generate randome ID
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
    setText("");
    setAmount("");
  };

  return (
    <React.Fragment>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
            required
          />
        </div>
        <div>
          <button className="btn">
            <span className="">Add Transaction</span>
          </button>
        </div>
      </form>
    </React.Fragment>
  );
}
