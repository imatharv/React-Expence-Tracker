import React, { useContext } from "react";
import TransactionComponent from "./TransactionComponent";
import { GlobalContext } from "../context/GlobalState";

export default function TransactionListComponent() {
  const { transactions } = useContext(GlobalContext);
  return (
    <React.Fragment>
      <h3>History</h3>
      <ul className="list">
        {transactions
          .slice(0)
          .reverse()
          .map((transaction) => (
            <TransactionComponent
              key={transaction.id}
              transaction={transaction}
            />
          ))}
      </ul>
    </React.Fragment>
  );
}
